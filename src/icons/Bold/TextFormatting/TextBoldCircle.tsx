import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextBoldCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M8.75 11.25H12a2.25 2.25 0 0 0 0-4.5H9.522a.77.77 0 0 0-.772.772zM8.75 12.75v4.073c0 .236.19.427.426.427H13a2.25 2.25 0 0 0 0-4.5z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m5.25-4.478A2.27 2.27 0 0 1 9.522 5.25H12a3.75 3.75 0 0 1 2.665 6.389A3.75 3.75 0 0 1 13 18.75H9.176a1.926 1.926 0 0 1-1.926-1.927z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTextBoldCircle;
