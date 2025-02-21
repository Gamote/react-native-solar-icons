import * as React from "react";
import Svg, { Circle, Path, Ellipse } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUsersGroupRounded = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={9} cy={6} r={4} stroke="black" strokeWidth={1.5} />
    <Path
      d="M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Ellipse cx={9} cy={17} rx={7} ry={4} stroke="black" strokeWidth={1.5} />
    <Path
      d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgUsersGroupRounded;
