import * as React from "react";
import Svg, { Circle, Ellipse } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUsersGroupRounded = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={15} cy={6} r={3} fill="#000" opacity={0.4} />
    <Ellipse cx={16} cy={17} fill="#000" opacity={0.4} rx={5} ry={3} />
    <Circle cx={9.001} cy={6} r={4} fill="#000" />
    <Ellipse cx={9.001} cy={17.001} fill="#000" rx={7} ry={4} />
  </Svg>
);
export default SvgUsersGroupRounded;
