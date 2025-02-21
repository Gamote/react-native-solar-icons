import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundAltArrowDown = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M15.53 11.03a.75.75 0 1 0-1.06-1.06L12 12.44 9.53 9.97a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0z"
    />
  </Svg>
);
export default SvgRoundAltArrowDown;
