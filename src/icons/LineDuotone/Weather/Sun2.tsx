import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSun2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={12} r={5} stroke="black" strokeWidth={1.5} />
    <Path d="M12 2V4" stroke="black" strokeWidth={1.5} strokeLinecap="round" />
    <Path
      d="M12 20V22"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M4 12L2 12"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M22 12L20 12"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M19.7778 4.22217L17.5558 6.25375"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M4.22217 4.22217L6.44418 6.25375"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M6.44434 17.5557L4.22211 19.7779"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M19.7778 19.7778L17.5558 17.5555"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgSun2;
