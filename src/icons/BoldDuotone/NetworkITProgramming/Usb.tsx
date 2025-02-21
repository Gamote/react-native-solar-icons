import * as React from "react";
import Svg, { Circle, Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUsb = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={20} r={2} fill="#000" />
    <Circle cx={6} cy={6} r={2} fill="#000" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 1.25a.75.75 0 0 1 .624.334l2 3a.75.75 0 1 1-1.248.832L12 3.352l-1.376 2.064a.75.75 0 1 1-1.248-.832l2-3A.75.75 0 0 1 12 1.25"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M16 8c0-.943 0-1.414.293-1.707S17.057 6 18 6s1.414 0 1.707.293S20 7.057 20 8s0 1.414-.293 1.707S18.943 10 18 10s-1.414 0-1.707-.293S16 8.943 16 8"
    />
    <G fill="#000" opacity={0.5}>
      <Path d="m12.616 1.571.008.013.003.004zM12 3.352l.75 1.125v10.515q.182-.093.38-.16l3.265-1.088c.51-.17.855-.647.855-1.186V9.991c.21.009.458.009.75.009s.54 0 .75-.009v2.5669999999999997a2.75 2.75 0 0 1-1.88 2.61l-3.265 1.088a1.25 1.25 0 0 0-.855 1.186v.703a2 2 0 0 0-1.5 0v-3.703a1.25 1.25 0 0 0-.855-1.186L7.13 12.167a2.75 2.75 0 0 1-1.88-2.609V7.855a2 2 0 0 0 1.5 0v1.703c0 .539.344 1.016.855 1.186l3.265 1.089q.198.066.38.159V4.477z" />
    </G>
  </Svg>
);
export default SvgUsb;
