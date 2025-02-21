import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDocument = (props: SvgProps) => (
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
      d="M4 5v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H5a1 1 0 0 1-1-1m3.25 7a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M4.409 4.087A1 1 0 0 1 5 5h12q.519.001 1 .126v-.82a2 2 0 0 0-2.283-1.98L4.92 3.87a1.07 1.07 0 0 0-.511.218"
    />
  </Svg>
);
export default SvgDocument;
