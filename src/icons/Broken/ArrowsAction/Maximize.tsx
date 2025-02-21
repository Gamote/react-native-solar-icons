import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMaximize = (props: SvgProps) => (
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
      d="M22 2h-5.857M22 2v5.857M22 2l-3.5 3.5M15 9l.875-.875M9 15l-7 7m0 0h5.857M2 22v-5.857"
    />
  </Svg>
);
export default SvgMaximize;
