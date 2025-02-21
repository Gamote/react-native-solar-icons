import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStructure = (props: SvgProps) => (
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
      d="M4.25 8.675A3.751 3.751 0 1 1 8.675 4.25h6.65a3.751 3.751 0 1 1 4.425 4.425v6.65a3.751 3.751 0 1 1-4.425 4.425h-6.65a3.751 3.751 0 1 1-4.425-4.425zM2.75 5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m3 10.325v-6.65A3.75 3.75 0 0 0 8.675 5.75h6.65a3.76 3.76 0 0 0 2.925 2.925v6.65a3.76 3.76 0 0 0-2.925 2.925h-6.65a3.76 3.76 0 0 0-2.925-2.925M5 16.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M21.25 5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m-4.5 14a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgStructure;
