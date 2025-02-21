import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMinimize = (props: SvgProps) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m2 22 .875-.875M9 15H3.143M9 15v5.857M9 15l-3.5 3.5M22 2l-7 7m0 0h5.857M15 9V3.143"
    />
  </Svg>
);
export default SvgMinimize;
