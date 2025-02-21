import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlaylist = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21 6H3M21 10H3M11 14H3M11 18H3"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M18.875 14.119c1.654.954 2.48 1.432 2.602 2.12.03.173.03.35 0 .521-.121.69-.948 1.167-2.602 2.122s-2.48 1.432-3.138 1.193a1.5 1.5 0 0 1-.451-.26c-.536-.45-.536-1.405-.536-3.315s0-2.864.536-3.314a1.5 1.5 0 0 1 .451-.26c.657-.24 1.484.238 3.138 1.192Z"
    />
  </Svg>
);
export default SvgPlaylist;
