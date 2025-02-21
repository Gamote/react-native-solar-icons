import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSadCircle = (props: SvgProps) => (
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
      d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m7.303 4.398A5.77 5.77 0 0 1 12 15.25c1.285 0 2.474.427 3.447 1.148a.75.75 0 1 1-.894 1.204A4.27 4.27 0 0 0 12 16.75c-.946 0-1.825.313-2.553.852a.75.75 0 1 1-.894-1.204"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"
    />
  </Svg>
);
export default SvgSadCircle;
