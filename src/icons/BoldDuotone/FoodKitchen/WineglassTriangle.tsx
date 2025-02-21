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
      fill="#000"
      d="M19.3 3H4.7C3.2 3 2.439 4.794 3.485 5.864l7.801 7.976a1 1 0 0 0 1.43 0l7.801-7.976C21.562 4.794 20.8 3 19.3 3"
      opacity={0.5}
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M7.006 21a.75.75 0 0 1 .75-.75h8.488a.75.75 0 0 1 0 1.5H7.756a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path fill="#000" d="M11.285 13.84a1 1 0 0 0 1.43 0L16.47 10H7.529z" />
    <Path
      fill="#000"
      d="M11.285 13.84a1 1 0 0 0 1.43 0l.035-.035v6.445h-1.5v-6.445z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgWineglassTriangle;
