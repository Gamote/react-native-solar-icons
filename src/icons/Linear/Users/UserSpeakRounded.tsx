import * as React from "react";
import Svg, { Circle, Ellipse, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserSpeakRounded = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={10} cy={6} r={4} stroke="black" strokeWidth={1.5} />
    <Ellipse cx={10} cy={17} rx={7} ry={4} stroke="black" strokeWidth={1.5} />
    <Path
      d="M19 2C19 2 21 3.2 21 6C21 8.8 19 10 19 10"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M17 4C17 4 18 4.6 18 6C18 7.4 17 8 17 8"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgUserSpeakRounded;
