import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundArrowLeftDown = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M13.5 15.75a.75.75 0 0 0 0-1.5h-2.69l4.72-4.72a.75.75 0 0 0-1.06-1.06l-4.72 4.72V10.5a.75.75 0 0 0-1.5 0V15c0 .414.336.75.75.75z"
    />
  </Svg>
);
export default SvgRoundArrowLeftDown;
