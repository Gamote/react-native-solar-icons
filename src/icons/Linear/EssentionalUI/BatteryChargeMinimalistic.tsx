import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBatteryChargeMinimalistic = (props: SvgProps) => (
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
      d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M22 14v-4" />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.5 9 9 12h3.5L10 15"
    />
  </Svg>
);
export default SvgBatteryChargeMinimalistic;
