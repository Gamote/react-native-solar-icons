import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVinyl = (props: SvgProps) => (
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
      d="M11.746 1.976a.75.75 0 0 1-.672.82 9.251 9.251 0 1 0 10.13 10.13.75.75 0 1 1 1.493.149c-.54 5.433-5.122 9.676-10.697 9.676-5.937 0-10.75-4.814-10.75-10.75 0-5.575 4.243-10.158 9.676-10.697a.75.75 0 0 1 .82.672m2.81-.123a.75.75 0 0 1 .669-.11 10.77 10.77 0 0 1 7.033 7.032.75.75 0 1 1-1.431.45 9.28 9.28 0 0 0-5.077-5.683V12a3.75 3.75 0 1 1-1.5-3V2.457a.75.75 0 0 1 .306-.605m-.306 10.148a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgVinyl;
