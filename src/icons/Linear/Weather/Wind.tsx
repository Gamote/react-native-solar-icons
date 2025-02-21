import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWind = (props: SvgProps) => (
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
      d="M3 8h6.5A2.5 2.5 0 1 0 7 5.5v.357M4 14h14.5a3.5 3.5 0 1 1-3.5 3.5V17"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2 11h16.5A3.5 3.5 0 1 0 15 7.5V8"
    />
  </Svg>
);
export default SvgWind;
