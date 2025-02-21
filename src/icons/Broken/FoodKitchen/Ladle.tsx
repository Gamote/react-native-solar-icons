import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLadle = (props: SvgProps) => (
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
      d="M2 5.684a3.684 3.684 0 0 1 7.368 0M22 14.5v1.184a6.316 6.316 0 0 1-12.632 0V9.158"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16 12c-3.054 0-6.5 1.12-6.5 2.5S12.946 17 16 17s6-1.12 6-2.5c0-.72-.8-1.369-2-1.825"
    />
  </Svg>
);
export default SvgLadle;
