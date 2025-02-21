import * as React from "react";
import Svg, { Circle, Ellipse, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUsersGroupRounded = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={9.001} cy={6} r={4} fill="#000" />
    <Ellipse cx={9.001} cy={17.001} fill="#000" rx={7} ry={4} />
    <Path
      fill="#000"
      d="M21 17c0 1.658-2.036 3-4.521 3 .732-.8 1.236-1.804 1.236-2.998s-.505-2.2-1.239-3.001C18.962 14 21 15.344 21 17M18 6.001a3 3 0 0 1-4.029 2.82A5.7 5.7 0 0 0 14.714 6c0-1.025-.27-1.987-.742-2.818A3 3 0 0 1 18 6.002"
    />
  </Svg>
);
export default SvgUsersGroupRounded;
