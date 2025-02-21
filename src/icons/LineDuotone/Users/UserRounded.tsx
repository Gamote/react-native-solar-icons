import * as React from "react";
import Svg, { Circle, Ellipse } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserRounded = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={6} r={4} stroke="#000" strokeWidth={1.5} />
    <Ellipse
      cx={12}
      cy={17}
      stroke="#000"
      strokeWidth={1.5}
      opacity={0.5}
      rx={7}
      ry={4}
    />
  </Svg>
);
export default SvgUserRounded;
