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
      d="M17.5 20H19m-7 0h2.75M6.5 4H5m7 0H9.25M19 12h-5M19 4h-3M5 20h2.667M10 12H7.5m-2 0H5"
    />
  </Svg>
);
export default SvgTuning4;
