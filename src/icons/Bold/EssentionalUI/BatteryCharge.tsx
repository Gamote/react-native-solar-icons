import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBatteryCharge = (props: SvgProps) => (
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
      d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172.944.943 1.127 2.348 1.163 4.828H20c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14h-.509c-.036 2.48-.22 3.885-1.163 4.828C17.157 20 15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m9.98-3.576a.75.75 0 0 1 .096 1.056l-1.475 1.77H12.5a.75.75 0 0 1 .576 1.23l-2.5 3a.75.75 0 0 1-1.152-.96l1.475-1.77H9a.75.75 0 0 1-.576-1.23l2.5-3a.75.75 0 0 1 1.056-.096"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBatteryCharge;
