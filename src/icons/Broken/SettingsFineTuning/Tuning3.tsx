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
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Circle
      cx={20}
      cy={14}
      r={2}
      transform="rotate(180 20 14)"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Circle
      r={2}
      transform="matrix(-1 8.74228e-08 8.74228e-08 1 4 10)"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M4 12L4 14.75M4 19L4 17.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M20 12L20 9.25M20 5L20 6.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 19L12 14"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M20 19L20 16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M4 5L4 7.66667"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 10V7.5M12 5V5.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgTuning3;
