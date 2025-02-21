import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTransmissionSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8 9V15"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 9V15"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8 12H13C13.9319 12 14.3978 12 14.7654 11.8478C15.2554 11.6448 15.6448 11.2554 15.8478 10.7654C16 10.3978 16 9.93188 16 9"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Rect
      x={2}
      y={2}
      width={20}
      height={20}
      rx={5}
      stroke="#1C274C"
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgTransmissionSquare;
