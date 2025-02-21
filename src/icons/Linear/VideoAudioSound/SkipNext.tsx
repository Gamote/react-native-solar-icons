import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSkipNext = (props: SvgProps) => (
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
      d="M16.66 9.353c1.787 1.154 1.787 4.14 0 5.294L5.87 21.614C4.135 22.737 2 21.277 2 18.968V5.033c0-2.31 2.134-3.769 3.87-2.648z"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M22 5v14" />
  </Svg>
);
export default SvgSkipNext;
