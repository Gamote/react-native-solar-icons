import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTuning = (props: SvgProps) => (
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
      d="M14 14.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM4 9.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7 13v5m0 3v1M17 11V6m0-3V2M17 22v-4M7 2v4"
    />
  </Svg>
);
export default SvgTuning;
