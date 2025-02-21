import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTuning4 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      cx={12}
      cy={12}
      r={2}
      transform="rotate(-90 12 12)"
      stroke="black"
      strokeWidth={1.5}
    />
    <Circle
      cx={10}
      cy={20}
      r={2}
      transform="rotate(-90 10 20)"
      stroke="black"
      strokeWidth={1.5}
    />
    <Circle
      r={2}
      transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 14 4)"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M16 12L19 12"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14 20L19 20"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10 4L5 4"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M5 12L8 12"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M5 20L6 20"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M19 4L18 4"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgTuning4;
