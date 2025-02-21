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
      stroke="#000"
      strokeWidth={1.5}
      d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 5v3" />
  </Svg>
);
export default SvgMouseMinimalistic;
