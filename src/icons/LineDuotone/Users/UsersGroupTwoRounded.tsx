import * as React from "react";
import Svg, { Circle, Path, Ellipse } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUsersGroupTwoRounded = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={6} r={4} stroke="black" strokeWidth={1.5} />
    <Path
      opacity={0.5}
      d="M18 9C19.6569 9 21 7.88071 21 6.5C21 5.11929 19.6569 4 18 4"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M6 9C4.34315 9 3 7.88071 3 6.5C3 5.11929 4.34315 4 6 4"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Ellipse cx={12} cy={17} rx={6} ry={4} stroke="black" strokeWidth={1.5} />
    <Path
      opacity={0.5}
      d="M20 19C21.7542 18.6153 23 17.6411 23 16.5C23 15.3589 21.7542 14.3847 20 14"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M4 19C2.24575 18.6153 1 17.6411 1 16.5C1 15.3589 2.24575 14.3847 4 14"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgUsersGroupTwoRounded;
