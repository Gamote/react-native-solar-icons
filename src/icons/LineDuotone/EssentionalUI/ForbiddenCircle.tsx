import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgForbiddenCircle = (props: SvgProps) => (
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
      d="m18.5 5.5-13 13"
      opacity={0.5}
    />
    <Circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
  </Svg>
);
export default SvgForbiddenCircle;
