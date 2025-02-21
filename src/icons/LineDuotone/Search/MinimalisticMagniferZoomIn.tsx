import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMinimalisticMagniferZoomIn = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={11.5} cy={11.5} r={9.5} stroke="#8E93A6" strokeWidth={1.5} />
    <Path
      d="M9 11.5H11.5M11.5 11.5H14M11.5 11.5V14M11.5 11.5V9"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M20 20L22 22"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgMinimalisticMagniferZoomIn;
