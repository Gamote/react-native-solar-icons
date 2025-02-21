#!/usr/bin/env ts-node

import * as fs from 'fs';
import * as path from 'path';

// ─────────────────────────────────────────────────────────────
// CONFIGURATION & HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────

// Base directory where your icon type folders are located.
const iconsDir = path.join(__dirname, '..', 'src', 'icons');

if (!fs.existsSync(iconsDir)) {
  console.error('Directory not found:', iconsDir);
  process.exit(1);
}

// Helper: convert a string (e.g. "BoldDuotone") to kebab-case (e.g. "bold-duotone").
function toKebabCase(str: string): string {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

// Recursively get all .tsx file names (without extension) from a directory.
function getIconNames(dir: string): string[] {
  let names: string[] = [];
  const items = fs.readdirSync(dir);
  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      names = names.concat(getIconNames(fullPath));
    } else if (item.endsWith('.tsx')) {
      names.push(path.basename(item, '.tsx'));
    }
  });
  return names;
}

// ─────────────────────────────────────────────────────────────
// STEP 1. Generate per‑type index files that export each icon category.
// ─────────────────────────────────────────────────────────────

/**
 * For each icon type folder (e.g. Bold), generate an index.ts that re‑exports
 * each category (subfolder) using a namespace export.
 */
function generateTypeIndexFile(typeFolderPath: string, typeFolderName: string) {
  // List immediate subdirectories (categories) in the type folder.
  const subFolders = fs.readdirSync(typeFolderPath).filter((item) => {
    const fullPath = path.join(typeFolderPath, item);
    return fs.statSync(fullPath).isDirectory();
  });

  let content = `// Auto-generated index for ${typeFolderName}\n\n`;
  subFolders.forEach((cat) => {
    // Export everything from the category.
    content += `export * as ${cat} from "./${cat}";\n`;
  });

  const indexPath = path.join(typeFolderPath, 'index.ts');
  fs.writeFileSync(indexPath, content);
  console.log(`Generated index for ${typeFolderName} at ${indexPath}`);
}

// Get the list of type folders (e.g. Bold, Outline, etc.).
const typeFolders = fs.readdirSync(iconsDir).filter((file) => {
  const fullPath = path.join(iconsDir, file);
  return fs.statSync(fullPath).isDirectory();
});

// Generate index.ts in each type folder.
typeFolders.forEach((folder) => {
  const typeFolderPath = path.join(iconsDir, folder);
  generateTypeIndexFile(typeFolderPath, folder);
});

// ─────────────────────────────────────────────────────────────
// STEP 2. Scan each type folder to build union types for icon names.
// ─────────────────────────────────────────────────────────────

// Build a mapping from lower-case type name (e.g. "bold") to array of icon names.
interface IconNames {
  [key: string]: string[];
}
const iconNamesByType: IconNames = {};
typeFolders.forEach((folder) => {
  // Use folder name as-is for union types (e.g. "Bold") but key it by folder.toLowerCase()
  const key = folder.toLowerCase();
  const folderPath = path.join(iconsDir, folder);
  iconNamesByType[key] = getIconNames(folderPath);
});

// ─────────────────────────────────────────────────────────────
// STEP 3. Generate the global index file with types, imports, iconMap,
//         and the helper function.
// ─────────────────────────────────────────────────────────────

let fileContent = `// Auto-generated global icon index and types. Do not modify directly.\n\n`;
fileContent += `import { SvgProps } from 'react-native-svg';\n\n`;
fileContent += `export type IconComponentType = React.ComponentType<SvgProps>;\n\n`;

// Create an enum-like object for icon types using the original folder names as keys.
fileContent += `export const IconTypes = {\n`;
typeFolders.forEach((folder) => {
  fileContent += `  ${folder}: "${toKebabCase(folder)}",\n`;
});
fileContent += `} as const;\n\n`;
fileContent += `export type IconType = typeof IconTypes[keyof typeof IconTypes];\n\n`;

// Generate explicit union types for each type folder based on scanned file names.
typeFolders.forEach((folder) => {
  const key = folder.toLowerCase();
  const names = iconNamesByType[key] || [];
  // For auto-completion, we want the union to use the file names as-is (PascalCase).
  fileContent += `export type ${folder}IconName = ${names.map(n => `"${n}"`).join(' | ') || 'never'};\n\n`;
});

// Build a mapping type that maps each icon type to its union type.
fileContent += `export type IconNameByType = {\n`;
typeFolders.forEach((folder) => {
  fileContent += `  [IconTypes.${folder}]: ${folder}IconName;\n`;
});
fileContent += `};\n\n`;

// Import each type folder's index.
typeFolders.forEach((folder) => {
  fileContent += `import * as ${folder}Icons from './${folder}';\n`;
});
fileContent += `\n`;

// Build the iconMap object using IconTypes as keys.
fileContent += `export const iconMap = {\n`;
typeFolders.forEach((folder) => {
  fileContent += `  [IconTypes.${folder}]: ${folder}Icons,\n`;
});
fileContent += `} as const;\n\n`;

// Create a helper function that searches each category in the given type
// for the requested icon.
fileContent += `export function getIconComponent<T extends IconType>(\n`;
fileContent += `  type: T,\n`;
fileContent += `  name: IconNameByType[T]\n`;
fileContent += `): IconComponentType | undefined {\n`;
fileContent += `  const typeModule = iconMap[type];\n`;
fileContent += `  for (const category in typeModule) {\n`;
fileContent += `    if (Object.prototype.hasOwnProperty.call(typeModule, category)) {\n`;
fileContent += `      const icons = typeModule[category] as Record<string, IconComponentType>;\n`;
fileContent += `      if (icons && name in icons) {\n`;
fileContent += `        return icons[name];\n`;
fileContent += `      }\n`;
fileContent += `    }\n`;
fileContent += `  }\n`;
fileContent += `  return undefined;\n`;
fileContent += `}\n`;

// Write the global index file to src/icons/index.ts.
const outputPath = path.join(iconsDir, 'index.ts');
fs.writeFileSync(outputPath, fileContent);
console.log('Global icon index and types generated at:', outputPath);
