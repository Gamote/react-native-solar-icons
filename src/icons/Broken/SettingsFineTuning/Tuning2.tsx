import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTuning2 = (props: SvgProps) => (
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
      d="M9.5 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM14.5 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11 7H6M3 7H2M13 17h5m3 0h1M2 17h4M22 7h-4"
    />
  </Svg>
);
export default SvgTuning2;
