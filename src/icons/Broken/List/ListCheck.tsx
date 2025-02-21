import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgListCheck = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14 16L16.1 18.5L20 13.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M10 14H3" stroke="black" strokeWidth={1.5} strokeLinecap="round" />
    <Path d="M10 18H3" stroke="black" strokeWidth={1.5} strokeLinecap="round" />
    <Path
      d="M3 6L13.5 6M20 6L17.75 6"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M20 10L9.5 10M3 10H5.25"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgListCheck;
