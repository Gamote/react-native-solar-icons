import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHistory2 = (props: SvgProps) => (
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
      d="M2 12c0 5.523 4.477 10 10 10 1.821 0 3.53-.487 5-1.338M12 2c5.523 0 10 4.477 10 10 0 1.821-.487 3.53-1.338 5"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9v4h4"
    />
    <Path
      stroke="#000"
      strokeDasharray="0.5 3.5"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17 20.662A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 1.821-.487 3.53-1.338 5"
    />
  </Svg>
);
export default SvgHistory2;
