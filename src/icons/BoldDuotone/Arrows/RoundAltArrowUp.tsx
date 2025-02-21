import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundAltArrowUp = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M8.47 12.97a.75.75 0 1 0 1.06 1.06L12 11.56l2.47 2.47a.75.75 0 0 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0z"
    />
  </Svg>
);
export default SvgRoundAltArrowUp;
