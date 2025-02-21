import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBugMinimalistic = (props: SvgProps) => (
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
      d="M5 10a7 7 0 0 1 14 0v5a7 7 0 1 1-14 0z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 13h3M5 13H2M20.5 7l-1.798.72M3.5 7l1.798.72M14.5 3.5 17 2M9.5 3.5 7 2M20.5 19l-2-.8M3.5 19l2-.8M10.5 10.5h3M10.5 15.5h3"
    />
  </Svg>
);
export default SvgBugMinimalistic;
