import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWindowFrame = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
    />
    <Path
      fill="#000"
      d="M7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
    <Path
      fill="#000"
      d="M2 8.75a.75.75 0 0 0 0 1.5zm20 1.5a.75.75 0 0 0 0-1.5zM8.25 21a.75.75 0 0 0 1.5 0zm1.5-11a.75.75 0 0 0-1.5 0zM2 10.25h20v-1.5H2zM9.75 21V10h-1.5v11z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgWindowFrame;
