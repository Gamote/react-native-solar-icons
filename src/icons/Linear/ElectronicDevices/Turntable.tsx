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
      strokeWidth={1.5}
      d="M2 12c0-4.714 0-7.071 1.172-8.536S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.464C22 4.93 22 7.286 22 12s0 7.071-1.172 8.535S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.465C2 19.072 2 16.714 2 12Z"
    />
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
  </Svg>
);
export default SvgTurntable;
