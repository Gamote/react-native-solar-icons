import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTransmissionSquare = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 9v6M12 9v6M8 12h5c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C16 10.398 16 9.932 16 9"
    />
    <Rect
      width={20}
      height={20}
      x={2}
      y={2}
      stroke="#1C274C"
      strokeWidth={1.5}
      rx={5}
    />
  </Svg>
);
export default SvgTransmissionSquare;
