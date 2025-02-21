import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCalendar = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7 4V2.5M17 4V2.5M2.5 9h19"
    />
    <Path
      fill="#000"
      d="M18 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0M18 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </Svg>
);
export default SvgCalendar;
