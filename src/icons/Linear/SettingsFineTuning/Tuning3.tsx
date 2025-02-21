import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTuning3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      cx={12}
      cy={12}
      r={2}
      transform="rotate(180 12 12)"
      stroke="black"
      strokeWidth={1.5}
    />
    <Circle
      cx={20}
      cy={14}
      r={2}
      transform="rotate(180 20 14)"
      stroke="black"
      strokeWidth={1.5}
    />
    <Circle
      r={2}
      transform="matrix(-1 8.74228e-08 8.74228e-08 1 4 10)"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M12 8L12 5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M20 10L20 5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M4 14L4 19"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 19L12 16"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M20 19L20 18"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path d="M4 5L4 6" stroke="black" strokeWidth={1.5} strokeLinecap="round" />
  </Svg>
);
export default SvgTuning3;
