import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSort = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 7L9 7M2 7L5 7"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M19 12H16M5 12L12 12"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path d="M16 17H8" stroke="black" strokeWidth={1.5} strokeLinecap="round" />
  </Svg>
);
export default SvgSort;
