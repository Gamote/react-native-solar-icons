import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMouseMinimalistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M19 15V9A7 7 0 1 0 5 9v6a7 7 0 1 0 14 0"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M12 4.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75"
    />
  </Svg>
);
export default SvgMouseMinimalistic;
