import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTestTubeMinimalistic = (props: SvgProps) => (
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
      d="M21 9.849 14.182 3m.681.685 5.376 5.399L13 16.354l-3.512 3.528a3.79 3.79 0 0 1-5.375 0 3.83 3.83 0 0 1 0-5.4z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m6.8 11.783 1.275.143a2.205 2.205 0 0 1 1.944 1.952 2.21 2.21 0 0 0 1.32 1.787l1.661.69"
      opacity={0.5}
    />
  </Svg>
);
export default SvgTestTubeMinimalistic;
