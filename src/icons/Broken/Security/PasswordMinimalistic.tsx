import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPasswordMinimalistic = (props: SvgProps) => (
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
      d="M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172.654.653.943 1.528 1.07 2.828"
    />
    <Path
      fill="#000"
      d="M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </Svg>
);
export default SvgPasswordMinimalistic;
