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
      strokeWidth={1.5}
      d="M6 8a6 6 0 1 1 12 0v5a6 6 0 0 1-12 0z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 6.5s.473-.5 2-.5 2 .5 2 .5M10 9.5s.473-.5 2-.5 2 .5 2 .5M21 11v2a9 9 0 1 1-18 0v-2"
    />
  </Svg>
);
export default SvgMicrophoneLarge;
