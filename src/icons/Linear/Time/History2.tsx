import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHistory2 = (props: SvgProps) => (
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
      d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9v4h4"
    />
    <Circle
      cx={12}
      cy={12}
      r={10}
      stroke="#000"
      strokeDasharray="0.5 3.5"
      strokeLinecap="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgHistory2;
