import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHelp = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={12} r={4} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="m15 9 4-4M5 19l4-4M9 9 5 5M19 19l-4-4"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9.412 2.339a9.95 9.95 0 0 1 5.176.002c5.335 1.43 8.5 6.913 7.071 12.247-1.43 5.335-6.912 8.5-12.247 7.071S.912 14.747 2.34 9.412a9.95 9.95 0 0 1 2.586-4.484"
    />
  </Svg>
);
export default SvgHelp;
