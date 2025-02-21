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
      fill="#000"
      d="M5.889 3.75a.75.75 0 0 0 0-1.5zM10 2.25a.75.75 0 0 0 0 1.5zm8.111 1.5c1.71 0 3.139 1.44 3.139 3.27h1.5c0-2.61-2.054-4.77-4.639-4.77zM5.89 2.25c-2.585 0-4.639 2.16-4.639 4.77h1.5c0-1.83 1.429-3.27 3.139-3.27zM21.25 7.02c0 1.667-1.19 3.016-2.693 3.238l.22 1.484c2.265-.335 3.973-2.338 3.973-4.722zM5.443 10.258C3.939 10.036 2.75 8.688 2.75 7.02h-1.5c0 2.384 1.708 4.387 3.974 4.722zM10 3.75h8.111v-1.5H10z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9v5m0 0 2-2.333M12 14l-2-2.333"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M5 10c0-1.886 0-2.828.586-3.414S7.114 6 9 6h6c1.886 0 2.828 0 3.414.586S19 8.114 19 10v6c0 1.886 0 2.828-.586 3.414S16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586S5 17.886 5 16z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 17h8m6 0h-2"
    />
  </Svg>
);
export default SvgCashOut;
