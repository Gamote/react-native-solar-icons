import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundArrowRightUp = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M10.5 8.25a.75.75 0 0 0 0 1.5h2.69l-4.72 4.72a.75.75 0 1 0 1.06 1.06l4.72-4.72v2.69a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-.75-.75z"
    />
  </Svg>
);
export default SvgRoundArrowRightUp;
