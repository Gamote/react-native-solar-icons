# Initial Setup

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
  npx @svgr/cli \
    --native \
    --typescript \
    --svgo-config ./svgo.config.json \
    --filename-case pascal \
    --out-dir src/icons \
    original/icons/SVG
  ```
- Create a custom SVGO plugin in `./svgo.plugin.js` to replace specific default colors with identifiers that we can then replace with props.
- Use the plugin in the `./svgo.config.js` file.
- Create custom type declarations in `src/react-native-svg-custom.d.ts` to make the `SvgProps` recognize the custom props: `primaryColor` and `secondaryColor`.
- Convert all SVGs to React components with the custom SVGO plugin and replace the colors with props.
  ```bash
  npx @svgr/cli \
    --native \
    --typescript \
    --svgo-config ./svgo.config.js \
    --replace-attr-values "%%primaryColor%%={props.primaryColor},%%secondaryColor%%={props.secondaryColor}" \
    --filename-case pascal \
    --out-dir src/icons \
    original/icons/SVG
  ```

## Creating the SolarIcon component and index files
- Created a script to generate index files for the icon categories, types and helpers in `scripts/generate-icons-index.ts`
- Added a script in `package.json` to run the script: `"generate-icons-index": "tsx scripts/generate-icons-index.ts"`
- Ran the script: `yarn generate-icons-index`

- Created `src/SolarIcon.tsx` to provide a single entry point for the icons.

- Created `src/index.ts` to export the `SolarIcon` component.

## Build
- Added a `tsconfig.json` file.
- Added a script in `package.json` to build the project: `"build": "tsc"`
- Set the `main` and `types` fields in `package.json` to point to the built files.
- Add the `peerDependencies` field in `package.json` to list the required dependencies.
- Ran the build script: `yarn build`

## Test
- Add a `testpack` command in `package.json` to pack the project: `"testpack": "yarn pack --filename react-native-solar-icons-latest.tgz"`
- Ran the test script: `yarn testpack`
- Install the package in a test project: `yarn add file:/absolute/path/to/react-native-solar-icons-v1.0.0.tgz`

## Publish
- Do your changes in the `main` branch.
- Commit the changes to the repository.
- Run `yarn build` to build the project.
- Update the version in `package.json` to the new version.
- Run `yarn npm publish` to publish the project.
- Commit the version change to the repository.

## Clean up

The setup is done, there is no reason to keep the `original/` folder. We can remove it.
In case we discover that we need to regenerate the icons, we can always clone the repository again.

## Known issues

### Wrong autocomplete when the icon is not part of the type

Wrong autocomplete when the icon is not part of the type.
Example: The `HandShake` is part only o the `bold` and `linear` types. If we try to use it like so:
```tsx
<SolarIcon type={"bold-duotone"} name={"HandShake"} />
```
it will throw a Typescript error.

**The issue is** that if we type in `HandSh` it will autocomplete to `HandShake` even if it's not part of the type. This is a limitation of the current implementation. We could improve this by using a different approach to generate the index files.

### Outdated icons

Some icons in the repository are outdated. The Figma [file]() is the source of truth.

For now, we only noticed this for the `AltArrowLeft`, `AltArrowRight`, `AltArrowUp` icons. We manually replaced them **only** in the `Linear` directory. We should investigate this further and find a way to automate this process and update all of them.
