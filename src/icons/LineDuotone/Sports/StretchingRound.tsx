import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStretchingRound = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={14.5} cy={4.5} r={2.5} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m7.948 13.434-.025-.024c-1.042-1.006-.237-2.625.67-3.268s4.752-1.642 4.752 3.292C13.345 18.13 9.695 22 5 22"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 21.996V18.05c0-1.776-1.605-3.129-3.373-2.844"
    />
  </Svg>
);
export default SvgStretchingRound;
