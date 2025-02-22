# React Native Solar Icons

## Installation

Install the package via Yarn or npm:

```bash
yarn add react-native-solar-icons
# or
npm install react-native-solar-icons
```
This package depends on `react-native-svg`, install it if you haven't already:
```bash
yarn add react-native-svg
# or
npx expo install react-native-svg
```
> For more details, please refer to their [installation guide](https://github.com/480-Design/Solar-Icon-Set).

## Usage

The simplest usage is by specifying the icon `name`:
```tsx
import { SolarIcon } from 'react-native-solar-icons';

export const App = () => <SolarIcon name="HandShake" />;
```

You can also customize the icon by specifying the `size` and `color`:
```tsx
export const App = () => <SolarIcon name="HandShake" size={32} color="red" />;
```

If you need to choose a different icon set, you can specify the `type`:
```tsx
export const App = () => <SolarIcon name="HandShake" size={32} color="red" type="bold-duotone" />;
```

## Properties
The `<SolarIcon>` component accepts the following properties:

| Property         | Type                                                                                                     | Default Value   | Description                                                                                                                                                                |
|------------------|----------------------------------------------------------------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`           | Union of valid icon names for the selected set (auto‑generated string literal union)                     | *Required*      | The name of the icon to render. This value is auto‑generated from the icon set and will vary depending on the selected **type**.                                           |
| `type`           | `"bold" \| "bold-duotone" \| "broken" \| "line-duotone" \| "linear" \| "outline"`                        | `"bold"`        | The icon set to use. If not specified, the Bold set is used by default.                                                                                                    |
| `color`          | `string`                                                                                                 | `"#000"`        | The primary color for the icon. Passed to the underlying SVG as `primaryColor` and used to tint most elements.                                                             |
| `secondaryColor` | `string`                                                                                                 | Same as `color` | The secondary color override. For icons that require two colors (duotone icons), this prop is passed as `secondaryColor`. If omitted, it defaults to the value of `color`. |
| `size`           | `number`                                                                                                 | `24`            | The size of the icon (applied to both width and height).                                                                                                                   |
| `...rest`        | Any additional props defined in [`SvgProps`](https://github.com/react-native-svg/react-native-svg#props) | —               | Any extra properties will be forwarded to the underlying `react-native-svg` component. This allows for further customization as needed.                                    |


---

✨ The icons are sourced from the [Solar Design System](https://github.com/480-Design/Solar-Icon-Set).