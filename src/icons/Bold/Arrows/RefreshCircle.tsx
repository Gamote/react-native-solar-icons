import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRefreshCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-16.54-.917a6.59 6.59 0 0 1 6.55-5.833 6.59 6.59 0 0 1 5.242 2.592.75.75 0 0 1-1.192.911 5.09 5.09 0 0 0-4.05-2.003 5.09 5.09 0 0 0-5.037 4.333h.364a.75.75 0 0 1 .53 1.281l-1.169 1.167a.75.75 0 0 1-1.06 0L4.47 12.364a.75.75 0 0 1 .53-1.28zm12.902-.614a.75.75 0 0 0-1.06 0l-1.168 1.167a.75.75 0 0 0 .53 1.28h.363a5.09 5.09 0 0 1-5.036 4.334 5.08 5.08 0 0 1-4.038-1.986.75.75 0 0 0-1.188.916 6.58 6.58 0 0 0 5.226 2.57 6.59 6.59 0 0 0 6.549-5.833H19a.75.75 0 0 0 .53-1.281z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRefreshCircle;
