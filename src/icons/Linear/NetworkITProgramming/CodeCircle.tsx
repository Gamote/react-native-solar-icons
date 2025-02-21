import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCodeCircle = (props: SvgProps) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m15.5 9 .172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15M13.294 7.17 12 12l-1.294 4.83M8.5 9l-.172.172c-1.333 1.333-2 2-2 2.828s.667 1.495 2 2.828L8.5 15"
    />
  </Svg>
);
export default SvgCodeCircle;
