import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMirror = (props: SvgProps) => (
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
      d="M5 9.5V19a3 3 0 0 1-.6 1.8L3.5 22M19 9.5V19a3 3 0 0 0 .6 1.8l.9 1.2M6.341 7A9.2 9.2 0 0 0 6 9.5c0 4.142 2.686 7.5 6 7.5s6-3.358 6-7.5S15.314 2 12 2c-1.09 0-2.114.364-2.995 1M5 20h7m7 0h-3"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13 5.256c.96.51 1.697 1.732 1.926 3.244"
    />
  </Svg>
);
export default SvgMirror;
