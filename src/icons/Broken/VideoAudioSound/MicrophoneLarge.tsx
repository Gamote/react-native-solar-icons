import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMicrophoneLarge = (props: SvgProps) => (
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
      d="M18 8v5a6 6 0 0 1-12 0V8a6 6 0 0 1 10.472-4"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 6.5s.473-.5 2-.5 2 .5 2 .5M10 9.5s.473-.5 2-.5 2 .5 2 .5M21 11v2a9 9 0 0 1-5 8.064M3 11v2a9 9 0 0 0 9 9"
    />
  </Svg>
);
export default SvgMicrophoneLarge;
