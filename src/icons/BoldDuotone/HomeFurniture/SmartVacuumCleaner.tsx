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
      fill="#000"
      d="m16.441 19.427-1 1.118.559.5a3.75 3.75 0 0 0 5.295-5.295l-.5-.56-1.118 1.001zM7.558 19.427l1 1.118-.558.5a3.75 3.75 0 0 1-5.295-5.295l.5-.56 1.117 1.001z"
      opacity={0.5}
    />
    <Path fill="#000" d="M12 6.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M22 11.75c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10m-13.75-3a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m4.5 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSmartVacuumCleaner;
