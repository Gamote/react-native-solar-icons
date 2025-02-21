import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTuning4 = (props: SvgProps) => (
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
      d="M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM14 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM10 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 20h7m0-8h-5m5-8h-3M12 4H5m5 8H5m0 8h2.667"
      opacity={0.5}
    />
  </Svg>
);
export default SvgTuning4;
