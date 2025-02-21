import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMen = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={10} cy={14} r={8} fill="#000" opacity={0.5} />
    <Path
      fill="#000"
      d="M17 1.25a.75.75 0 0 0 0 1.5h3.19l-5.088 5.088q.58.48 1.06 1.06l5.088-5.087V7a.75.75 0 0 0 1.5 0V2.25a1 1 0 0 0-1-1z"
    />
  </Svg>
);
export default SvgMen;
