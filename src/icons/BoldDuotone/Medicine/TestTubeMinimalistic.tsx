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
      fill="#000"
      d="M3.187 15.048a4.085 4.085 0 0 0 0 5.76 4.04 4.04 0 0 0 5.734 0l3.746-3.763-1.772-.736a2.36 2.36 0 0 1-1.408-1.906 2.35 2.35 0 0 0-2.074-2.082h-1.51z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M13.362 2.233a.8.8 0 0 1 1.132.003l7.273 7.305a.8.8 0 0 1-1.134 1.129L13.36 3.364a.8.8 0 0 1 .002-1.13"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M14.09 4.098 3.187 15.048a4.085 4.085 0 0 0 0 5.76 4.04 4.04 0 0 0 5.734 0L19.824 9.855z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgTestTubeMinimalistic;
