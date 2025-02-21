import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRecordMinimalistic = (props: SvgProps) => (
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
      d="M9.464 15.25A4.75 4.75 0 1 0 6 16.75h12a4.75 4.75 0 1 0-3.464-1.5zM6 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5m12 6.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRecordMinimalistic;
