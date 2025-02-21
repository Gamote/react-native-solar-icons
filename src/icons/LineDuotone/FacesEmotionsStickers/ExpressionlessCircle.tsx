import * as React from "react";
import Svg, { Circle, Path, Ellipse } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgExpressionlessCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      opacity={0.5}
      cx={12}
      cy={12}
      r={10}
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M9 16C10 16 10.8846 16 12 16C13.1154 16 14 16 15 16"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
      fill="black"
    />
    <Ellipse cx={9} cy={10.5} rx={1} ry={1.5} fill="black" />
  </Svg>
);
export default SvgExpressionlessCircle;
