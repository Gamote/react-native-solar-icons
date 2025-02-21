import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBackpack = (props: SvgProps) => (
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
      d="M21 10.73v5.6450000000000005a4.52 4.52 0 0 1-3.538 4.411c-3.598.8-7.326.8-10.923 0A4.52 4.52 0 0 1 3 16.375v-5.644a6 6 0 0 1 4.618-5.757l.176-.04.167-.036a19 19 0 0 1 8.421.076A6 6 0 0 1 19.632 7M17.5 15.5V17"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15.959 4.5A3 3 0 0 0 13 2h-2a3 3 0 0 0-2.959 2.5M3 14a22.2 22.2 0 0 0 5 1.546M21 14a22.15 22.15 0 0 1-9 1.91M10 13h4"
    />
  </Svg>
);
export default SvgBackpack;
