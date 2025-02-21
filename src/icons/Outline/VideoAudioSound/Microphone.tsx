import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMicrophone = (props: SvgProps) => (
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
      d="M6.25 8a5.75 5.75 0 1 1 11.5 0v3a5.75 5.75 0 0 1-11.5 0zM12 3.75A4.25 4.25 0 0 0 7.75 8v3a4.25 4.25 0 0 0 8.434.75H13a.75.75 0 0 1 0-1.5h3.25v-1.5H13a.75.75 0 0 1 0-1.5h3.184A4.25 4.25 0 0 0 12 3.75m-8 5.5a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718V22a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMicrophone;
