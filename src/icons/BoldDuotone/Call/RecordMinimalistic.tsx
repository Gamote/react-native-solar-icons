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
      d="M22 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0M10 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
    />
    <Path
      fill="#000"
      d="M6 16h12a3.99 3.99 0 0 1-2.646-1H8.646c-.705.622-1.632 1-2.646 1"
      opacity={0.5}
    />
  </Svg>
);
export default SvgRecordMinimalistic;
