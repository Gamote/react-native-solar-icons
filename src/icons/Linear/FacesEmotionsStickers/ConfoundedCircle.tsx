import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgConfoundedCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8 12 2-1.5L8 9M16 12l-2-1.5L16 9M16 16l-1.333-1-1.334 1L12 15l-1.333 1-1.334-1L8 16"
    />
  </Svg>
);
export default SvgConfoundedCircle;
