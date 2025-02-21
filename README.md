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
   yarn add -D tsx @types/node
   ```
