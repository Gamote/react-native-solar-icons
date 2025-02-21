import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSlashCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M14.019 7.364a.75.75 0 0 0-1.449-.388l-2.588 9.66a.75.75 0 0 0 1.449.388z"
    />
  </Svg>
);
export default SvgSlashCircle;
