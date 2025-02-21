import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSmartVacuumCleaner = (props: SvgProps) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM16.5 20.736a3 3 0 0 0 4.236-4.236M7.5 20.736A3 3 0 0 1 3.264 16.5"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 18v-2" />
  </Svg>
);
export default SvgSmartVacuumCleaner;
