import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDoubleAltArrowDown = (props: SvgProps) => (
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
      d="m19 11-7 6-1.75-1.5M5 11l2.333 2M5 7l7 6 1.75-1.5M19 7l-2.333 2"
    />
  </Svg>
);
export default SvgDoubleAltArrowDown;
