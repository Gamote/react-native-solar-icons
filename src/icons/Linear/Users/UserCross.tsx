import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserCross = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={6} r={4} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M15 13.327A13.6 13.6 0 0 0 12 13c-4.418 0-8 2.015-8 4.5S4 22 12 22c5.687 0 7.331-1.018 7.807-2.5"
    />
    <Circle cx={18} cy={16} r={4} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.667 14.667 2.666 2.666m0-2.666-2.666 2.666"
    />
  </Svg>
);
export default SvgUserCross;
