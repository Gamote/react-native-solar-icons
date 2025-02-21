import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSkirt = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M10 5.5h4l1.96 16.178A23.4 23.4 0 0 1 12 22c-1.495 0-2.812-.125-3.961-.322z"
      opacity={0.6}
    />
    <Path
      fill="#000"
      d="M5.838 5.5 2.08 17.953c-.216.716.001 1.485.654 1.876.984.591 2.717 1.404 5.304 1.849L9.999 5.5z"
      opacity={0.4}
    />
    <Path
      fill="#000"
      d="M21.266 19.83c.652-.392.87-1.161.654-1.877L18.162 5.5H14l1.96 16.178c2.587-.444 4.32-1.258 5.306-1.849"
      opacity={0.7}
    />
    <Path
      fill="#000"
      d="M16.109 2H7.892c-.968 0-1.452 0-1.753.293S5.838 3.057 5.838 4v1.5h12.325V4c0-.943 0-1.414-.301-1.707C17.562 2 17.077 2 16.109 2"
    />
  </Svg>
);
export default SvgSkirt;
