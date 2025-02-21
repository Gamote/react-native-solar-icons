import * as React from "react";
import Svg, { Circle, Ellipse, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserSpeakRounded = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={10} cy={6} r={4} stroke="#000" strokeWidth={1.5} />
    <Ellipse cx={10} cy={17} stroke="#000" strokeWidth={1.5} rx={7} ry={4} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 2s2 1.2 2 4-2 4-2 4M17 4s1 .6 1 2-1 2-1 2"
    />
  </Svg>
);
export default SvgUserSpeakRounded;
