import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTurntable = (props: SvgProps) => (
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
      d="m15 17 .894-.447A2 2 0 0 0 17 14.763V10.5"
    />
    <Rect
      width={8}
      height={8}
      x={6}
      y={8}
      stroke="#000"
      strokeWidth={1.5}
      rx={4}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M15.5 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"
    />
  </Svg>
);
export default SvgTurntable;
