import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStopwatch = (props: SvgProps) => (
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
      d="M21 13a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 13V9"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M10 2h4" />
  </Svg>
);
export default SvgStopwatch;
