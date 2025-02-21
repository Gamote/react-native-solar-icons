import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSmartphone2 = (props: SvgProps) => (
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
      d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M15 5H9" />
    <Circle cx={12} cy={19} r={1} stroke="#000" />
    <Path stroke="#000" d="M4 17h16M4 7h16" />
  </Svg>
);
export default SvgSmartphone2;
