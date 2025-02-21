import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgKeyMinimalistic2 = (props: SvgProps) => (
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
      d="M21.064 12.5A7 7 0 1 0 18 15.326"
    />
    <Circle cx={15} cy={9} r={2} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m3.5 20.5 6-6M6 21l-1.5-1.5m2-2L8 19"
    />
  </Svg>
);
export default SvgKeyMinimalistic2;
