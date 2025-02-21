import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSquareArrowRightUp = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M20.536 3.464C19.07 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M15.579 9.172a.75.75 0 0 0-.75-.75h-4.243a.75.75 0 0 0 0 1.5h2.432L8.64 14.298a.75.75 0 0 0 1.061 1.061l4.377-4.376v2.432a.75.75 0 0 0 1.5 0z"
    />
  </Svg>
);
export default SvgSquareArrowRightUp;
