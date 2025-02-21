import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFigma = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M11.667 2H8.333a3.333 3.333 0 1 0 0 6.667h3.334z"
      opacity={0.6}
    />
    <Path
      fill="#000"
      d="M11.667 8.667H8.333a3.333 3.333 0 0 0 0 6.666h3.334z"
      opacity={0.4}
    />
    <Path
      fill="#000"
      d="M18.333 12a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0"
    />
    <Path
      fill="#000"
      d="M8.333 15.334h3.334v3.333a3.333 3.333 0 1 1-3.334-3.334"
      opacity={0.2}
    />
    <Path
      fill="#000"
      d="M11.666 2h3.333a3.333 3.333 0 1 1 0 6.667h-3.333z"
      opacity={0.8}
    />
  </Svg>
);
export default SvgFigma;
