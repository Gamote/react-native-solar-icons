import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMagnet = (props: SvgProps) => (
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
      d="M13 2.75a9.25 9.25 0 0 0 0 18.5h3.25v-3.5H13a5.75 5.75 0 0 1 0-11.5h3.25v-3.5zm4.75 0v3.5h1.75a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 0-.75-.75zm0 15v3.5h1.75a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 0-.75-.75zM2.25 12C2.25 6.063 7.063 1.25 13 1.25h6.5a2.25 2.25 0 0 1 2.25 2.25v2a2.25 2.25 0 0 1-2.25 2.25H13a4.25 4.25 0 0 0 0 8.5h6.5a2.25 2.25 0 0 1 2.25 2.25v2a2.25 2.25 0 0 1-2.25 2.25H13C7.063 22.75 2.25 17.937 2.25 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMagnet;
