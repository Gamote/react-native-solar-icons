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
      fill="#000"
      fillRule="evenodd"
      d="M16.5 4.5a4.75 4.75 0 0 0-4.39 2.934.75.75 0 1 1-1.387-.574 6.252 6.252 0 0 1 11.553 0 .75.75 0 0 1-1.386.574A4.75 4.75 0 0 0 16.5 4.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M16.5 7a2.25 2.25 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 1 1-1.44.42A2.25 2.25 0 0 0 16.5 7"
      clipRule="evenodd"
      opacity={0.7}
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M2 15.75c0-1.886 0-2.828.586-3.414S4.114 11.75 6 11.75h12c1.886 0 2.828 0 3.414.586S22 13.864 22 15.75s0 2.828-.586 3.414-1.528.586-3.414.586H6c-1.886 0-2.828 0-3.414-.586S2 17.636 2 15.75m4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
    <Path fill="#000" d="M17.25 8.75a.75.75 0 0 0-1.5 0v3h1.5z" />
  </Svg>
);
export default SvgWiFiRouterMinimalistic;
