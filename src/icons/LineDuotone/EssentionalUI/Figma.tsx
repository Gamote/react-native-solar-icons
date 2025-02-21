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
      stroke="#000"
      strokeWidth={1.5}
      d="M12 2H8.667a3.333 3.333 0 1 0 0 6.667H12z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 8.667H8.667a3.333 3.333 0 0 0 0 6.666H12z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M18.667 12A3.333 3.333 0 1 1 12 12a3.333 3.333 0 0 1 6.667 0ZM8.667 15.333H12v3.334a3.333 3.333 0 1 1-3.333-3.334Z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 2h3.333a3.333 3.333 0 1 1 0 6.667H12z"
    />
  </Svg>
);
export default SvgFigma;
