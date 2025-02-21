import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBone = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.931 16.631c-.393.394-.369 1.043-.22 1.58.28 1.013-.105 2.308-.848 3.051A2.519 2.519 0 0 1 6.3 17.7a2.519 2.519 0 0 1-3.562-3.563c.743-.743 2.038-1.128 3.052-.848.536.149 1.185.173 1.579-.22m9.262-2.138c.394-.393 1.043-.369 1.58-.22 1.013.28 2.308-.105 3.051-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562c-.743.743-1.128 2.038-.848 3.052.149.536.173 1.185-.22 1.579"
    />
    <Path
      fill="#000"
      d="M17.161 11.462a.75.75 0 1 0-1.06-1.061zM13.6 7.899a.75.75 0 0 0-1.06-1.06zm-2.137 9.262 5.7-5.7-1.061-1.06-5.7 5.7zM7.899 13.6l5.7-5.7-1.06-1.06-5.7 5.7z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgBone;
