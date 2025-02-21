import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgInfoCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={12} r={10} stroke="black" strokeWidth={1.5} />
    <Path
      d="M12 17V11"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle r={1} transform="matrix(1 0 0 -1 12 8)" fill="black" />
  </Svg>
);
export default SvgInfoCircle;
