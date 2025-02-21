import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMagnifer = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={11.5} cy={11.5} r={9.5} stroke="#8E93A6" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18.5 18.5 22 22"
    />
  </Svg>
);
export default SvgMagnifer;
