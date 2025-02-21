import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMouse = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 15a7 7 0 1 1-14 0V9a7 7 0 0 1 14 0v2"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M10.5 8.5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0z"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 2v5" />
  </Svg>
);
export default SvgMouse;
