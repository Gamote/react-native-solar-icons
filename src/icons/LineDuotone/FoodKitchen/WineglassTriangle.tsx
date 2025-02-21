import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWineglassTriangle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.244 21H7.756M4.701 3h14.598c1.5 0 2.263 1.794 1.217 2.864l-7.801 7.976a1 1 0 0 1-1.43 0L3.484 5.864C2.438 4.794 3.2 3 4.7 3Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 14.571V21M7.473 9.75h9.054"
      opacity={0.5}
    />
  </Svg>
);
export default SvgWineglassTriangle;
