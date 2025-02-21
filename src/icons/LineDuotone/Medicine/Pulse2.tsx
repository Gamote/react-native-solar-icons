import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPulse2 = (props: SvgProps) => (
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
      d="M2 15h3c.634 0 .95 0 1.234.121.283.122.501.351.938.81l1.142 1.199c.384.403.576.605.81.589s.397-.241.724-.692l3.63-5.01c.34-.47.51-.704.75-.715s.431.207.813.642l1.777 2.031c.441.505.662.757.957.89.296.135.63.135 1.3.135H22"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgPulse2;
