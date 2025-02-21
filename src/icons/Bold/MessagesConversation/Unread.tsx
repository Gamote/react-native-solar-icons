import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUnread = (props: SvgProps) => (
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
      d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12m-4.546-5.097a.75.75 0 0 1 .143 1.052l-6.858 9a.75.75 0 0 1-1.161.038l-3.143-3.6a.75.75 0 1 1 1.13-.986l2.538 2.907 6.3-8.269a.75.75 0 0 1 1.052-.142"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgUnread;
