import * as React from "react";
import Svg, { Circle, Ellipse } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUsersGroupRounded = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle opacity={0.4} cx={15} cy={6} r={3} fill={props.primaryColor} />
    <Ellipse
      opacity={0.4}
      cx={16}
      cy={17}
      rx={5}
      ry={3}
      fill={props.primaryColor}
    />
    <Circle cx={9.00098} cy={6} r={4} fill={props.primaryColor} />
    <Ellipse cx={9.00098} cy={17.001} rx={7} ry={4} fill={props.primaryColor} />
  </Svg>
);
export default SvgUsersGroupRounded;
