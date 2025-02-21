import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTennis2 = (props: SvgProps) => (
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
      d="M3.34 17C6.1 21.783 12.217 23.422 17 20.66a9.96 9.96 0 0 0 4.197-4.731A9.99 9.99 0 0 0 20.66 7a9.99 9.99 0 0 0-7.464-4.929A9.96 9.96 0 0 0 7 3.34C2.217 6.101.578 12.217 3.34 17Z"
    />
    <Path
      stroke="#000"
      strokeDasharray="1.5 2"
      strokeWidth={1.5}
      d="M13.196 2.071s-1.098 4.099 1.402 8.43 6.599 5.428 6.599 5.428M2.803 8.071s4.099 1.099 6.599 5.43 1.402 8.428 1.402 8.428"
      opacity={0.5}
    />
  </Svg>
);
export default SvgTennis2;
