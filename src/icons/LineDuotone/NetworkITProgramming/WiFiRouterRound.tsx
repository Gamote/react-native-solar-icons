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
      stroke="#000"
      strokeWidth={1.5}
      d="M2 15a5 5 0 0 1 5-5h10a5 5 0 0 1 0 10H7a5 5 0 0 1-5-5Z"
    />
    <Path
      fill="#000"
      d="M18.33 22.335a.75.75 0 1 0 1.34-.67zm-1-2 1 2 1.34-.67-1-2zM5.67 22.335a.75.75 0 1 1-1.34-.67zm1-2-1 2-1.34-.67 1-2z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M8.5 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 15h6.5"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21.583 5.397a5.502 5.502 0 0 0-10.167 0"
      opacity={0.4}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.38 6.658a3.001 3.001 0 0 0-5.76 0"
      opacity={0.7}
    />
    <Path fill="#000" d="M17.5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </Svg>
);
export default SvgWiFiRouterRound;
