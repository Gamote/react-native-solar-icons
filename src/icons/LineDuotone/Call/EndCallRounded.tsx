import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEndCallRounded = (props: SvgProps) => (
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
      d="M3.083 10.503C2.277 11.373 2 12.613 2 13.85c0 2.06 1.782 3.565 3.607 3.047l1.34-.38C8.156 16.174 9 14.983 9 13.618m11.917-3.115c.806.87 1.083 2.11 1.083 3.347 0 2.06-1.782 3.565-3.607 3.047l-1.34-.38C15.844 16.174 15 14.983 15 13.618"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M3.083 10.503C4.44 9.04 7.193 7 12 7s7.56 2.039 8.917 3.503M9 13.619s0-1.655 3-1.655 3 1.654 3 1.654"
      opacity={0.5}
    />
  </Svg>
);
export default SvgEndCallRounded;
