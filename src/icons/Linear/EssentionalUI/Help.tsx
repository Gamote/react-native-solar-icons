import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHelp = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
    <Circle cx={12} cy={12} r={4} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="m15 9 4-4M5 19l4-4M9 9 5 5M19 19l-4-4"
    />
  </Svg>
);
export default SvgHelp;
