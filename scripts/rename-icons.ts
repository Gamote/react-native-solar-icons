#!/usr/bin/env ts-node

import * as fs from 'fs';
import * as path from 'path';

/**
 * Sanitizes a given string by removing any characters that are not letters or numbers.
 * Adjust the regex if you'd like to allow additional characters.
 */
function sanitizeName(name: string): string {
  return name.replace(/[^a-zA-Z0-9]/g, '');
}

/**
 * Recursively renames files and directories within the given directory.
 * For files, it preserves the file extension.
 */
function renameRecursively(dir: string): void {
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const oldPath = path.join(dir, item);
    const stats = fs.statSync(oldPath);
    let newName: string;

    if (stats.isFile()) {
      // Split file name into base and extension, sanitize only the base.
      const ext = path.extname(item);
      const base = path.basename(item, ext);
      const sanitizedBase = sanitizeName(base);
      newName = sanitizedBase + ext;
    } else {
      // For directories, sanitize the entire name.
      newName = sanitizeName(item);
    }

    const newPath = path.join(dir, newName);

    // Rename if necessary.
    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
    }

    // Recurse into subdirectories.
    if (stats.isDirectory()) {
      renameRecursively(newPath);
    }
  });
}

(function main() {
  const rootDir = path.join(__dirname, '..', 'original', 'icons', 'SVG');
  renameRecursively(rootDir);
  console.log('All icons renamed successfully!');
})();
