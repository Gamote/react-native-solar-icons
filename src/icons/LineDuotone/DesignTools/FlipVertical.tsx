import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlipVertical = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5.88641 2L18.1137 2C19.8158 2 20.6669 2 20.946 2.54242C21.2251 3.08484 20.7305 3.77738 19.7411 5.16247L18.6117 6.74372C18.1718 7.35957 17.9518 7.6675 17.6288 7.83375C17.3057 8 16.9273 8 16.1705 8L7.8296 8C7.07276 8 6.69435 8 6.3713 7.83375C6.04824 7.6675 5.82829 7.35957 5.3884 6.74372L4.25894 5.16248C3.26959 3.77738 2.77491 3.08484 3.05405 2.54242C3.33319 2 4.18426 2 5.88641 2Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M5.88641 22L18.1136 22C19.8158 22 20.6669 22 20.946 21.4576C21.2251 20.9152 20.7305 20.2226 19.7411 18.8375L18.6117 17.2563C18.1718 16.6404 17.9518 16.3325 17.6288 16.1662C17.3057 16 16.9273 16 16.1705 16L7.8296 16C7.07276 16 6.69435 16 6.3713 16.1662C6.04824 16.3325 5.8283 16.6404 5.3884 17.2563L4.25894 18.8375C3.26959 20.2226 2.77491 20.9152 3.05405 21.4576C3.33319 22 4.18426 22 5.88641 22Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M10 12L14 12"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M18 12L22 12"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M2 12L6 12"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgFlipVertical;
