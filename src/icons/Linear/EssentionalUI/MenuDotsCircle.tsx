import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMenuDotsCircle = (props: SvgProps) => (
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
      strokeWidth={2}
      d="M8 12h.009m3.995 0h.01m3.977 0H16"
    />
    <Circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
  </Svg>
);
export default SvgMenuDotsCircle;
