import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgColourTuneing = (props: SvgProps) => (
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
      d="M2 12h7.5M22 12h-7.5M20 15.684C20 19 17.735 22 16 22c-1.257 0-2.328-.97-3.032-3M4.144 8.316C4.144 5 6.41 2 8.144 2c2.269 0 3.928 3.158 3.928 10q.002 1.64.123 3"
    />
  </Svg>
);
export default SvgColourTuneing;
