import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRestart = (props: SvgProps) => (
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
      d="M6.873 7.873a7.25 7.25 0 0 1 7.928-1.563l1.13-1.13a8.75 8.75 0 1 0 4.751 6.727.75.75 0 0 0-1.488.187 7.25 7.25 0 1 1-12.32-4.22"
      clipRule="evenodd"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M18.721 4.201a.75.75 0 0 0-1.28-.53l-1.51 1.51-1.13 1.13-1.603 1.603a.75.75 0 0 0 .53 1.28h4.243a.75.75 0 0 0 .75-.75z"
    />
  </Svg>
);
export default SvgRestart;
