import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPills3 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11 9.5a4.5 4.5 0 1 0-9 0m9 0a4.5 4.5 0 0 1-9 0m9 0H2"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.758 7.122A3 3 0 1 0 19 2.879a3 3 0 0 0-4.242 4.243Z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M20.905 17.381a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524a3.738 3.738 0 0 0 5.286 5.286z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M14 14s.281 1.46 1.911 3.09S19 19 19 19"
      opacity={0.5}
    />
  </Svg>
);
export default SvgPills3;
