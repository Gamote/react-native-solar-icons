import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSortHorizontal = (props: SvgProps) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6 8 4.125-4M6 8l4.125 4M6 8h7m5 0h-2M18 16l-4.125-4M18 16l-4.125 4M18 16h-7m-5 0h2"
    />
  </Svg>
);
export default SvgSortHorizontal;
