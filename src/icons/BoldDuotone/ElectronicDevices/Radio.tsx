import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRadio = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14"
      opacity={0.5}
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M7.5 16.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M5.25 17a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M7 9a2 2 0 1 0 0 4h7.25v-1.5a.75.75 0 0 1 1.5 0V13H17a2 2 0 1 0 0-4z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M15.364 2.656a.75.75 0 1 0-.728-1.311L6.088 6.093c.876-.08 1.941-.091 3.256-.093z"
    />
  </Svg>
);
export default SvgRadio;
