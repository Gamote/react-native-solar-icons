import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWomen = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M9.5 17.75a.75.75 0 0 0 0 1.5zm5 1.5a.75.75 0 0 0 0-1.5zM11.25 22a.75.75 0 0 0 1.5 0zm0-6v2.5h1.5V16zm.75 1.75H9.5v1.5H12zm2.5 0H12v1.5h2.5zm-3.25.75V22h1.5v-3.5z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z"
    />
  </Svg>
);
export default SvgWomen;
