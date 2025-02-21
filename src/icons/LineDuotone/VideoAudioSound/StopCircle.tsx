import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStopCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle
      cx={12}
      cy={12}
      r={10}
      stroke="#000"
      strokeWidth={1.5}
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M8 12c0-1.886 0-2.828.586-3.414S10.114 8 12 8s2.828 0 3.414.586S16 10.114 16 12s0 2.828-.586 3.414S13.886 16 12 16s-2.828 0-3.414-.586S8 13.886 8 12Z"
    />
  </Svg>
);
export default SvgStopCircle;
