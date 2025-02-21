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
      fill="#000"
      d="M16.959 9.75a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-.75.75M7 12.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6M17 11.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6.209 15a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-1.5 0zM16.959 22.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75M6.209 2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0z"
    />
  </Svg>
);
export default SvgTuning;
