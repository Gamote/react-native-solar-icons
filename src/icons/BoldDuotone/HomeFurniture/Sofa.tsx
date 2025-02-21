import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSofa = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M18.444 18H5.556a3.6 3.6 0 0 1-.806-.092V19a.75.75 0 0 1-1.5 0v-1.849A3.55 3.55 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444a3.55 3.55 0 0 1-1.25 2.707V19a.75.75 0 0 1-1.5 0v-1.092a3.6 3.6 0 0 1-.806.092"
    />
    <Path
      fill="#000"
      d="M4.007 9c.008-.328.027-.566.07-.78A4 4 0 0 1 7.22 5.077C7.606 5 8.07 5 9 5h6c.93 0 1.394 0 1.78.077a4 4 0 0 1 3.143 3.143c.043.214.062.452.07.78H20v1a2 2 0 0 0-2 2v1.2a.8.8 0 0 1-.8.8H6.8a.8.8 0 0 1-.8-.8V12a2 2 0 0 0-2-2V9z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgSofa;
