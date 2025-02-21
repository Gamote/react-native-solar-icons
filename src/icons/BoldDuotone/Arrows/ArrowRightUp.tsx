import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowRightUp = (props: SvgProps) => (
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
      d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97-1.06-1.06z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgArrowRightUp;
