import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTuning2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M9.25 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6M14.25 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M8.75 6.209a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5zM14.75 16.209a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zM1 16.959a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M21.75 6.209a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5z"
    />
  </Svg>
);
export default SvgTuning2;
