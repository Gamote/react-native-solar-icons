import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlignVerticalSpacing = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M1.25 21a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0-18A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3"
      clipRule="evenodd"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M4 12c0 1.886 0 2.828.586 3.414S6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586S20 13.886 20 12s0-2.828-.586-3.414S17.886 8 16 8H8c-1.886 0-2.828 0-3.414.586S4 10.114 4 12"
    />
  </Svg>
);
export default SvgAlignVerticalSpacing;
