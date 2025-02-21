import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSquareArrowRightDown = (props: SvgProps) => (
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
      d="M20.536 3.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464m-5.708 12.114a.75.75 0 0 0 .75-.75v-4.242a.75.75 0 0 0-1.5 0v2.432L9.702 8.64a.75.75 0 0 0-1.06 1.06l4.376 4.377h-2.432a.75.75 0 0 0 0 1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSquareArrowRightDown;
