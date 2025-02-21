import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCashOut = (props: SvgProps) => (
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
      d="M18.667 12C20.55 11.721 22 10.046 22 8.02 22 5.8 20.259 4 18.111 4H5.89C3.74 4 2 5.8 2 8.02c0 2.026 1.449 3.701 3.333 3.98"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 7v7m0 0 2-2.333M12 14l-2-2.333"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M5 11c0-1.886 0-2.828.586-3.414S7.114 7 9 7h6c1.886 0 2.828 0 3.414.586S19 9.114 19 11v6c0 1.886 0 2.828-.586 3.414S16.886 21 15 21H9c-1.886 0-2.828 0-3.414-.586S5 18.886 5 17z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 18h14"
      opacity={0.5}
    />
  </Svg>
);
export default SvgCashOut;
