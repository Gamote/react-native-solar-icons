import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEyeScan = (props: SvgProps) => (
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
      d="M22 15c0 3.771 0 4.657-1.172 5.828S17.771 22 14 22M10 2C6.229 2 4.343 2 3.172 3.172S2 5.229 2 9M12 7C9.073 7 7.08 8.562 5.892 9.94 5.297 10.63 5 10.975 5 12s.297 1.37.892 2.06C7.08 15.438 9.072 17 12 17s4.92-1.562 6.108-2.94c.595-.69.892-1.035.892-2.06s-.297-1.37-.892-2.06A9 9 0 0 0 16 8.125"
    />
    <Circle cx={12} cy={12} r={2} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 22H9m-7-7c0 3.771 0 4.657 1.172 5.828.653.654 1.528.943 2.828 1.07M14 2h1m7 7c0-3.771 0-4.657-1.172-5.828-.653-.654-1.528-.943-2.828-1.07"
    />
  </Svg>
);
export default SvgEyeScan;
