import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWiFiRouterMinimalistic = (props: SvgProps) => (
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
      d="M21.583 7.397a5.502 5.502 0 0 0-10.167 0"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.38 8.658a3.001 3.001 0 0 0-5.76 0"
    />
    <Path
      fill="#000"
      d="M7 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13 20H6c-1.886 0-2.828 0-3.414-.586S2 17.886 2 16s0-2.828.586-3.414S4.114 12 6 12h12c1.886 0 2.828 0 3.414.586S22 14.114 22 16s0 2.828-.586 3.414S19.886 20 18 20h-1M16.5 12V9"
    />
  </Svg>
);
export default SvgWiFiRouterMinimalistic;
