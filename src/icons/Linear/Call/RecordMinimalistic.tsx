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
      stroke="#000"
      strokeWidth={1.5}
      d="M22 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM10 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M6 16h12" />
  </Svg>
);
export default SvgRecordMinimalistic;
