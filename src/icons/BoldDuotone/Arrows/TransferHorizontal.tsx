import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTransferHorizontal = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M10.25 4a.75.75 0 0 0-1.303-.507l-5.5 6A.75.75 0 0 0 4 10.75h16a.75.75 0 0 0 0-1.5h-9.75z"
    />
    <Path
      fill="#000"
      d="M13.75 20v-5.25H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .553 1.257l-5.5 6A.75.75 0 0 1 13.75 20"
      opacity={0.5}
    />
  </Svg>
);
export default SvgTransferHorizontal;
