import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTuning3 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle
      cx={12}
      cy={12}
      r={2}
      stroke="#000"
      strokeWidth={1.5}
      transform="rotate(180 12 12)"
    />
    <Circle
      cx={20}
      cy={14}
      r={2}
      stroke="#000"
      strokeWidth={1.5}
      transform="rotate(180 20 14)"
    />
    <Circle
      r={2}
      stroke="#000"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 4 10)"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 8V5M20 10V5M4 14v5M12 19v-3M20 19v-1M4 5v1"
    />
  </Svg>
);
export default SvgTuning3;
