import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundArrowRightDown = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M10.5 15.75a.75.75 0 0 1 0-1.5h2.69L8.47 9.53a.75.75 0 0 1 1.06-1.06l4.72 4.72V10.5a.75.75 0 0 1 1.5 0V15a.75.75 0 0 1-.75.75z"
    />
  </Svg>
);
export default SvgRoundArrowRightDown;
