import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlaylistMinimalistic2 = (props: SvgProps) => (
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
      d="M9 14H3M8 18H3M17 16.5V8"
    />
    <Circle cx={14.5} cy={16.5} r={2.5} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21 12a4 4 0 0 1-4-4M3 6h7.412M15 6h-1.588M13 10H6.824M3 10h1.324"
    />
  </Svg>
);
export default SvgPlaylistMinimalistic2;
