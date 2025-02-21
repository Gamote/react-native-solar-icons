import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWheel = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={12} r={10} stroke="#1C274C" strokeWidth={1.5} />
    <Circle cx={12} cy={12} r={6} stroke="#1C274C" strokeWidth={1.5} />
    <Circle cx={12} cy={12} r={2} stroke="#1C274C" strokeWidth={1.5} />
    <Path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6 12h4M14 12h4M9 17.196l2-3.464M13 10.268l2-3.464M15 17.196l-2-3.464M11 10.268 9 6.804"
    />
  </Svg>
);
export default SvgWheel;
