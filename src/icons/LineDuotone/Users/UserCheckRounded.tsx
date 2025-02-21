import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserCheckRounded = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={6} r={4} stroke="black" strokeWidth={1.5} />
    <Circle cx={17} cy={18} r={4} stroke="black" strokeWidth={1.5} />
    <Path
      d="M15.6665 18.0002L16.5 19.0002L18.3332 17.1113"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.5}
      d="M14 20.8344C13.3663 20.9421 12.695 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C13.7135 13 15.2832 13.3518 16.5 13.9359"
      stroke="black"
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgUserCheckRounded;
