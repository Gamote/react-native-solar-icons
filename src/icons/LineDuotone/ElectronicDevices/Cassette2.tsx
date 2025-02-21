import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCassette2 = (props: SvgProps) => (
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
      d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"
    />
    <Path
      fill="#000"
      d="M8.5 10.75a.75.75 0 0 0 0 1.5zm7.5 1.5a.75.75 0 0 0 0-1.5zm-7.5 3a.75.75 0 0 0 0 1.5zm7.5 1.5a.75.75 0 0 0 0-1.5zm1.25-3a1.5 1.5 0 0 1-1.5 1.5v1.5a3 3 0 0 0 3-3zm-1.5-1.5a1.5 1.5 0 0 1 1.5 1.5h1.5a3 3 0 0 0-3-3zm-7.5 3a1.5 1.5 0 0 1-1.5-1.5h-1.5a3 3 0 0 0 3 3zm0-4.5a3 3 0 0 0-3 3h1.5a1.5 1.5 0 0 1 1.5-1.5zm.25 1.5H16v-1.5H8.5zm0 4.5H16v-1.5H8.5z"
    />
    <Path
      fill="#000"
      d="M15.75 15.25a1.5 1.5 0 0 1-1.5-1.5h-1.5a3 3 0 0 0 3 3zm0-4.5a3 3 0 0 0-3 3h1.5a1.5 1.5 0 0 1 1.5-1.5zm-6 3a1.5 1.5 0 0 1-1.5 1.5v1.5a3 3 0 0 0 3-3zm-1.5-1.5a1.5 1.5 0 0 1 1.5 1.5h1.5a3 3 0 0 0-3-3z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.5 4.5-.527 1.404c-.47 1.256-.706 1.884-1.22 2.24s-1.184.356-2.525.356h-2.456c-1.34 0-2.011 0-2.525-.356s-.75-.984-1.22-2.24L6.5 4.5"
      opacity={0.5}
    />
  </Svg>
);
export default SvgCassette2;
