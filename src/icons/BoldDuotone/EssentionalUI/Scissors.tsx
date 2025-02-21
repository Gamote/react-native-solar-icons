import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgScissors = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M6.654 1.633a.75.75 0 1 0-1.308.735L15.704 20.79a3.75 3.75 0 1 0-.136-3.303z"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M17.346 1.633a.75.75 0 1 1 1.308.735L8.296 20.79a3.75 3.75 0 1 1 .136-3.303z"
    />
  </Svg>
);
export default SvgScissors;
