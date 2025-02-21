import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgInfoCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 17v-6" />
    <Circle r={1} fill="#000" transform="matrix(1 0 0 -1 12 8)" />
  </Svg>
);
export default SvgInfoCircle;
