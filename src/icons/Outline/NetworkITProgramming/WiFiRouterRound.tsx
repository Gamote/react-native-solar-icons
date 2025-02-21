import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWiFiRouterRound = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12.109 5.684a4.752 4.752 0 0 1 8.781 0 .75.75 0 1 0 1.386-.574 6.252 6.252 0 0 0-11.553 0 .75.75 0 0 0 1.386.574"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M7 12.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M6.25 15a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M11.25 15a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M7 9.25a5.75 5.75 0 0 0-2.03 11.132l-.64 1.283a.75.75 0 1 0 1.34.67l.805-1.609q.26.024.525.024h10q.265 0 .525-.024l.804 1.61a.75.75 0 1 0 1.342-.671l-.642-1.283A5.752 5.752 0 0 0 17 9.25zM2.75 15A4.25 4.25 0 0 1 7 10.75h10a4.25 4.25 0 0 1 0 8.5H7A4.25 4.25 0 0 1 2.75 15"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M16.5 5.25a2.25 2.25 0 0 0-2.16 1.618.75.75 0 1 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 1 1-1.44.42A2.25 2.25 0 0 0 16.5 5.25"
    />
    <Path fill="#000" d="M16.5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </Svg>
);
export default SvgWiFiRouterRound;
