import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBombMinimalistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m17 7-2 2M19.5 7.5l1 .5M16 3.5l.5 1M19 5l1-1M5.75 8.003a7.5 7.5 0 1 1-2.747 2.747"
    />
  </Svg>
);
export default SvgBombMinimalistic;
