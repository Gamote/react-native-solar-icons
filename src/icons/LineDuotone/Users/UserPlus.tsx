import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserPlus = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={6} r={4} stroke="black" strokeWidth={1.5} />
    <Path
      opacity={0.5}
      d="M15 13.3271C14.0736 13.1162 13.0609 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C17.6874 22 19.3315 20.9817 19.8068 19.5"
      stroke="black"
      strokeWidth={1.5}
    />
    <Circle cx={18} cy={16} r={4} stroke="black" strokeWidth={1.5} />
    <Path
      d="M18 14.6665V17.3332"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.6665 16L19.3332 16"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgUserPlus;
