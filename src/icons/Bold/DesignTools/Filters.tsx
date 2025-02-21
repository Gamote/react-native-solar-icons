import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFilters = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0" />
    <Path
      fill="#000"
      d="M5.033 10.784a6 6 0 1 0 8.92 4.46 7.502 7.502 0 0 1-8.92-4.46M15.387 14.694q.112.636.113 1.306c0 2.09-.855 3.982-2.235 5.342a6 6 0 0 0 5.702-10.558 7.53 7.53 0 0 1-3.58 3.91"
    />
  </Svg>
);
export default SvgFilters;
