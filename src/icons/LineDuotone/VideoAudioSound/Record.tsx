import * as React from "react";
import Svg, { Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRecord = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={12} r={10} stroke="black" strokeWidth={1.5} />
  </Svg>
);
export default SvgRecord;
