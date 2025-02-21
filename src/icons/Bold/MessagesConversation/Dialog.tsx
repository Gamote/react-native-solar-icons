import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDialog = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M22 8.5a6.5 6.5 0 0 0-11.626-3.993C15.447 4.703 19.5 8.878 19.5 14q0 .165-.006.33l.333.088a1.3 1.3 0 0 0 1.592-1.591l-.128-.476c-.103-.385-.04-.791.125-1.153A6.5 6.5 0 0 0 22 8.5"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M18 14a8 8 0 0 1-11.45 7.22 1.67 1.67 0 0 0-1.15-.13l-1.227.329a1.3 1.3 0 0 1-1.591-1.592L2.91 18.6a1.67 1.67 0 0 0-.13-1.15A8 8 0 1 1 18 14M6.5 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgDialog;
