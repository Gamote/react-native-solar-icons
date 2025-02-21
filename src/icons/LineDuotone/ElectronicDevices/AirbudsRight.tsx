import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAirbudsRight = (props: SvgProps) => (
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
      d="M21 18.667v.833c0 .14 0 .209-.003.268a2.35 2.35 0 0 1-2.23 2.229C18.71 22 18.64 22 18.5 22c-.14 0-.209 0-.268-.003a2.35 2.35 0 0 1-2.229-2.23C16 19.71 16 19.64 16 19.5v-.833m5 0V7.559A5.59 5.59 0 0 0 15.44 2h-.105A3.353 3.353 0 0 0 12 5.336V8a3 3 0 0 0 3 3 1 1 0 0 1 1 1v6.667m5 0h-5"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.676}
      d="M15 5v3"
      opacity={0.5}
    />
    <Circle
      cx={7.5}
      cy={16.5}
      r={5.5}
      stroke="#000"
      strokeWidth={1.5}
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 5.1A5.01 5.01 0 0 0 5.1 9"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M6 14v-.75a.75.75 0 0 0-.75.75zm-.75 5a.75.75 0 0 0 1.5 0zM6 16.5h-.75v.75H6zm2.357 2.886a.75.75 0 1 0 1.286-.772zM6 14.75h1.5v-1.5H6zm.75 1.75V14h-1.5v2.5zm1.5-1.25c0 .154-.202.5-.75.5v1.5c1.109 0 2.25-.773 2.25-2zm-.75-.5c.548 0 .75.346.75.5h1.5c0-1.227-1.141-2-2.25-2zM5.25 14v5h1.5v-5zm2.25 1.75H6v1.5h1.5zm-.643 1.136 1.5 2.5 1.286-.772-1.5-2.5z"
    />
  </Svg>
);
export default SvgAirbudsRight;
