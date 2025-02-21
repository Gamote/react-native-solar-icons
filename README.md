# React Native Solar Icons

## Preparing the project
- Initialize the project:
   ```bash
   yarn init -y
   ```
- Create the `.gitignore` file
- Create the `.nvmrc` file
- Use Yarn v4 ([see more](https://gist.github.com/wojtekmaj/c38351dd715c1b108ab1ab089fcaf6fc))
  - `yarn set version berry`.
  - Create the yarn configuration file `.yarnrc.yml` with the following content:
    ```yaml
    nodeLinker: node-modules
    ```
  - Adjust the `.gitignore` file to include the following lines:
    ```
    # Yarn
    .pnp.*
    .yarn/*
    !.yarn/patches
    !.yarn/plugins
    !.yarn/releases
    !.yarn/sdks
    !.yarn/versions
    ```
  - Enable the corepack: `corepack enable`
  - Run `yarn` to install the packages.
- Install dependencies:
   ```bash
   yarn add -D typescript tsx @types/node
   ```

## Original
1. Cloned everything from https://github.com/480-Design/Solar-Icon-Set/tree/main into `original/` folder.
2. Sanitize the directory and file names.
   - Created a script in `scripts/rename-icons.ts`
   - Added a script in `package.json` to run the script: `"rename-icons": "tsx scripts/rename-icons.ts"`
   - Ran the script: `yarn rename-icons`

## Converting SVGs to React components

- Installed `@svgr/cli` to convert SVGs to React components.
  ```bash
  yarn add -D @svgr/cli
  ```
- Add dependencies:
  ```bash
  yarn add -D react @types/react react-native @types/react-native
  ```
- Converted all SVGs to React components.
  ```bash
  #npx svgr --icon --replace-attr-value '#000' --replace-attr-value 'currentColor' --template original/template.js original/ -d src/
  npx @svgr/cli \
    --native \
    --typescript \
    --filename-case pascal \
    --out-dir src/icons \
    original/icons/SVG
  ```
  
- Created a script to generate index files for the icon categories, types and helpers in `scripts/generate-icons-index.ts`
- Added a script in `package.json` to run the script: `"generate-icons-index": "tsx scripts/generate-icons-index.ts"`
- Ran the script: `yarn generate-icons-index`

- Created `src/SolarIcon.tsx` to provide a single entry point for the icons.
