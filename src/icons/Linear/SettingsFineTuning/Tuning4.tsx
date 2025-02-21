import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTuning4 = (props: SvgProps) => (
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
      transform="rotate(-90 12 12)"
    />
    <Circle
      cx={10}
      cy={20}
      r={2}
      stroke="#000"
      strokeWidth={1.5}
      transform="rotate(-90 10 20)"
    />
    <Circle
      r={2}
      stroke="#000"
      strokeWidth={1.5}
      transform="matrix(0 -1 -1 0 14 4)"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16 12h3M14 20h5M10 4H5M5 12h3M5 20h1M19 4h-1"
    />
  </Svg>
);
export default SvgTuning4;
