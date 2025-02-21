import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWheel = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={12} r={10} stroke="#1C274C" strokeWidth={1.5} />
    <Circle cx={12} cy={12} r={6} stroke="#1C274C" strokeWidth={1.5} />
    <Circle cx={12} cy={12} r={2} stroke="#1C274C" strokeWidth={1.5} />
    <Path
      d="M6 12L10 12"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14 12L18 12"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M9 17.1963L11 13.7322"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13 10.2681L15 6.80396"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M15 17.1963L13 13.7322"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11 10.2681L9 6.80396"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgWheel;
