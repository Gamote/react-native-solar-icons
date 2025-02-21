import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlate = (props: SvgProps) => (
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
      d="M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828C4.235 4.108 5.886 4.01 9 4m6 0c3.114.009 4.765.107 5.828 1.17.654.654.943 1.529 1.07 2.829M12 5V3M8 10.5h8M8 14h5.5"
    />
  </Svg>
);
export default SvgPlate;
