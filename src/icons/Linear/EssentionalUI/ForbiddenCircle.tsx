import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgForbiddenCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18.5 5.5L5.50002 18.4998"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle cx={12} cy={12} r={10} stroke="black" strokeWidth={1.5} />
  </Svg>
);
export default SvgForbiddenCircle;
