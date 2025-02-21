import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSkateboard = (props: SvgProps) => (
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
      d="m2 7 .813 1.219A4 4 0 0 0 6.14 10h11.718a4 4 0 0 0 3.328-1.781L22 7"
      opacity={0.5}
    />
    <Circle cx={7} cy={15} r={2} stroke="#000" strokeWidth={1.5} />
    <Circle cx={17} cy={15} r={2} stroke="#000" strokeWidth={1.5} />
  </Svg>
);
export default SvgSkateboard;
