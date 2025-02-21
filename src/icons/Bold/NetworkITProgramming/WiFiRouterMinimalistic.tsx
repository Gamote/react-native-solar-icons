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
      d="M12.11 7.434a4.752 4.752 0 0 1 8.78 0 .75.75 0 0 0 1.386-.574 6.252 6.252 0 0 0-11.553 0 .75.75 0 0 0 1.386.574"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M2.586 12.336C2 12.922 2 13.864 2 15.75s0 2.828.586 3.414 1.528.586 3.414.586h12c1.886 0 2.828 0 3.414-.586S22 17.636 22 15.75s0-2.828-.586-3.414-1.528-.586-3.414-.586h-.75v-3a.75.75 0 0 0-1.5 0v3H6c-1.886 0-2.828 0-3.414.586M6 16.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M14.34 8.618a2.251 2.251 0 0 1 4.32 0 .75.75 0 1 0 1.44-.42 3.751 3.751 0 0 0-7.2 0 .75.75 0 0 0 1.44.42"
    />
  </Svg>
);
export default SvgWiFiRouterMinimalistic;
