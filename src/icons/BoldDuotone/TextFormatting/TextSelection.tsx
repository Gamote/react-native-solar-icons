import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextSelection = (props: SvgProps) => (
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
      d="M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0V9.75H9A.75.75 0 0 1 8.25 9"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4M22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
    <G fill="#000" opacity={0.5}>
      <Path d="M4.75 5.855a2 2 0 0 1-1.5 0v12.29a2 2 0 0 1 1.5 0zM5.855 4.75h12.29a2 2 0 0 1 0-1.5H5.855a2 2 0 0 1 0 1.5M19.25 5.855a2 2 0 0 0 1.5 0v12.29a2 2 0 0 0-1.5 0zM18.145 19.25H5.855a2 2 0 0 1 0 1.5h12.29a2 2 0 0 1 0-1.5" />
    </G>
  </Svg>
);
export default SvgTextSelection;
