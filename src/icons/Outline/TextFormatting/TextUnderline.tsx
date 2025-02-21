import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextUnderline = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M4.75 3a.75.75 0 0 0-1.5 0v6a8.75 8.75 0 1 0 17.5 0V3a.75.75 0 0 0-1.5 0v6a7.25 7.25 0 1 1-14.5 0zM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z"
    />
  </Svg>
);
export default SvgTextUnderline;
