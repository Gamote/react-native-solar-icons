import * as React from "react";
import Svg, { Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMenuDots = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={5} cy={12} r={2} stroke="#000" strokeWidth={1.5} />
    <Circle
      cx={12}
      cy={12}
      r={2}
      stroke="#000"
      strokeWidth={1.5}
      opacity={0.5}
    />
    <Circle cx={19} cy={12} r={2} stroke="#000" strokeWidth={1.5} />
  </Svg>
);
export default SvgMenuDots;
