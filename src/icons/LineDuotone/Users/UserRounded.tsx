import * as React from "react";
import Svg, { Circle, Ellipse } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserRounded = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={6} r={4} stroke="black" strokeWidth={1.5} />
    <Ellipse
      opacity={0.5}
      cx={12}
      cy={17}
      rx={7}
      ry={4}
      stroke="black"
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgUserRounded;
