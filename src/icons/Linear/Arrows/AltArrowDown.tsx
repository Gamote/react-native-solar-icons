import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAltArrowDown = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path fill={props.primaryColor} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={1.5} d="m19 9-7 6-7-6" />
  </Svg>
);
export default SvgAltArrowDown;
