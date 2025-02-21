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
      d="M16.959 9.75a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-.75.75"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M7 5.75a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5M9.25 9.5a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0M17 18.25a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5m2.25-3.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M6.209 15a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-1.5 0zM16.959 22.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75M6.209 2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0z"
    />
  </Svg>
);
export default SvgTuning;
