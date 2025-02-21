import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBowling = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
    <Circle
      cx={12}
      cy={7}
      r={1.5}
      stroke="#000"
      strokeWidth={1.5}
      opacity={0.5}
      transform="rotate(-90 12 7)"
    />
    <Circle
      cx={12}
      cy={12}
      r={1.5}
      stroke="#000"
      strokeWidth={1.5}
      opacity={0.5}
      transform="rotate(-90 12 12)"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M8 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgBowling;
