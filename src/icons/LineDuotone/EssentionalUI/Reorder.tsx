import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgReorder = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M19 10H5" />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 14H5M19 6H5"
      opacity={0.5}
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M19 18H5" />
  </Svg>
);
export default SvgReorder;
