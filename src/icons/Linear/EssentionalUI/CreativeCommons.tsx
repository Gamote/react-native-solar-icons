import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCreativeCommons = (props: SvgProps) => (
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
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11 15.667A4.5 4.5 0 0 1 9.286 16C6.919 16 5 14.21 5 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333M19 15.667a4.5 4.5 0 0 1-1.714.333C14.919 16 13 14.21 13 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333"
    />
  </Svg>
);
export default SvgCreativeCommons;
