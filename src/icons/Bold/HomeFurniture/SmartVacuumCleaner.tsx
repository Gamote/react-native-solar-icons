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
    <Path fill="#000" d="M9.75 9a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M21.21 15.904c.508-1.2.79-2.519.79-3.904 0-5.523-4.477-10-10-10S2 6.477 2 12c0 1.385.282 2.704.79 3.904L2.706 16A3.75 3.75 0 0 0 8 21.295l.096-.086c1.2.51 2.519.791 3.904.791a10 10 0 0 0 3.904-.79l.096.085A3.75 3.75 0 0 0 21.295 16zm-.768 1.459a10.05 10.05 0 0 1-3.08 3.079 2.25 2.25 0 0 0 3.08-3.08M6.637 20.442a10.05 10.05 0 0 1-3.08-3.08 2.25 2.25 0 0 0 3.08 3.08M12 5.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 10a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSmartVacuumCleaner;
