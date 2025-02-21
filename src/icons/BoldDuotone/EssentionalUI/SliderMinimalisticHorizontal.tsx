import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSliderMinimalisticHorizontal = (props: SvgProps) => (
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
      d="M20.25 2.77a.76.76 0 0 1-.75.768h-15a.76.76 0 0 1-.75-.769A.76.76 0 0 1 4.5 2h15a.76.76 0 0 1 .75.77m0 18.46a.76.76 0 0 1-.75.77h-15a.76.76 0 0 1-.75-.77.76.76 0 0 1 .75-.768h15a.76.76 0 0 1 .75.769"
      clipRule="evenodd"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M16 5.846c2.828 0 4.243 0 5.121.901C22 7.65 22 9.1 22 12s0 4.352-.879 5.253c-.878.9-2.293.9-5.121.9H8c-2.828 0-4.243 0-5.121-.9C2 16.352 2 14.9 2 12c0-2.9 0-4.351.879-5.253.878-.9 2.293-.9 5.121-.9z"
    />
  </Svg>
);
export default SvgSliderMinimalisticHorizontal;
