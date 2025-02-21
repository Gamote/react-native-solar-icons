import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBicyclingRound = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={14} cy={4} r={2} stroke="#000" strokeWidth={1.5} />
    <Circle cx={6} cy={18} r={3} stroke="#000" strokeWidth={1.5} />
    <Circle cx={18} cy={18} r={3} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18.5 10h-3.918c-.377 0-.743-.128-1.038-.363L11.386 7.92A2.638 2.638 0 1 0 8.688 12.4M12 18l.76-1.774a1.89 1.89 0 0 0-.981-2.477"
    />
  </Svg>
);
export default SvgBicyclingRound;
