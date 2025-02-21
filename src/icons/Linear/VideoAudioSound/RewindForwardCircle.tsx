import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRewindForwardCircle = (props: SvgProps) => (
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
      strokeWidth={1.5}
      d="m13 8.071 3.221 2.302a2 2 0 0 1 0 3.254L13 15.93m-5.5-.872V8.943a1 1 0 0 1 1.581-.814l4.28 3.057a1 1 0 0 1 0 1.628L9.08 15.87a1 1 0 0 1-1.581-.814Z"
    />
  </Svg>
);
export default SvgRewindForwardCircle;
