import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFridge = (props: SvgProps) => (
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
      d="M4 10v3c0 3.771 0 5.657 1.172 6.828S8.229 21 12 21s5.657 0 6.828-1.172S20 16.771 20 13v-3c0-3.771 0-5.657-1.172-6.828S15.771 2 12 2 6.343 2 5.172 3.172C4.518 3.825 4.229 4.7 4.102 6"
    />
    <Path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 21v1h-1v-1m-8 0v1H7v-1"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20 11.5h-5m-11 0h7M17 7v2M17 14v2"
    />
  </Svg>
);
export default SvgFridge;
