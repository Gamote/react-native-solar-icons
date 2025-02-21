import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBicyclingRound = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={14} cy={4} r={2} stroke="black" strokeWidth={1.5} />
    <Circle cx={6} cy={18} r={3} stroke="black" strokeWidth={1.5} />
    <Circle cx={18} cy={18} r={3} stroke="black" strokeWidth={1.5} />
    <Path
      d="M18.4999 9.99997H14.5822C14.2052 9.99997 13.8393 9.87213 13.5444 9.63733L11.386 7.91916C10.1193 6.91084 8.25168 7.27102 7.45083 8.67806C6.67562 10.0401 7.25192 11.7736 8.68829 12.4004M11.9999 18L12.7603 16.2258C13.1695 15.2708 12.7312 14.1646 11.779 13.749"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBicyclingRound;
