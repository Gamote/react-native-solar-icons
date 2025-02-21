import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDangerCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      opacity={0.5}
      cx={12}
      cy={12}
      r={10}
      stroke="black"
      strokeWidth={1.5}
    />
    <Path d="M12 7V13" stroke="black" strokeWidth={1.5} strokeLinecap="round" />
    <Circle cx={12} cy={16} r={1} fill="black" />
  </Svg>
);
export default SvgDangerCircle;
