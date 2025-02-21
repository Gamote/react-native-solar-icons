import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAirbudsLeft = (props: SvgProps) => (
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
      d="M2 18.667v.833a2.5 2.5 0 0 0 5 0v-.833m-5 0V7.559A5.59 5.59 0 0 1 7.56 2h.105A3.353 3.353 0 0 1 11 5.336V8a3 3 0 0 1-3 3 1 1 0 0 0-1 1v6.667m-5 0h5"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.676}
      d="M8 5v3"
      opacity={0.5}
    />
    <Circle
      r={5.5}
      stroke="#000"
      strokeWidth={1.5}
      opacity={0.5}
      transform="matrix(-1 0 0 1 15.5 16.5)"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 14v5h3"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14 5.1A5.01 5.01 0 0 1 17.9 9"
      opacity={0.5}
    />
  </Svg>
);
export default SvgAirbudsLeft;
