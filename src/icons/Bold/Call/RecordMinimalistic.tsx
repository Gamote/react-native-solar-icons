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
      d="M5.889 16C3.74 16 2 14.21 2 12s1.741-4 3.889-4 3.889 1.79 3.889 4a4.06 4.06 0 0 1-.697 2.286h5.838A4.06 4.06 0 0 1 14.222 12c0-2.21 1.741-4 3.89-4C20.258 8 22 9.79 22 12s-1.741 4-3.889 4z"
    />
  </Svg>
);
export default SvgRecordMinimalistic;
