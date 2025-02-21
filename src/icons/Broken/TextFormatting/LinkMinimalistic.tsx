import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLinkMinimalistic = (props: SvgProps) => (
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
      d="M9 12h6M9 18H8A6 6 0 0 1 8 6h1M15 6h1a6 6 0 0 1 6 6m-7 6h1a5.97 5.97 0 0 0 3.318-1"
    />
  </Svg>
);
export default SvgLinkMinimalistic;
