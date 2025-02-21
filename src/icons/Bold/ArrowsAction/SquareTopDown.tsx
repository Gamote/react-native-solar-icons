import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSquareTopDown = (props: SvgProps) => (
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
      d="M14.25 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V4.81l-6.72 6.72a.75.75 0 1 1-1.06-1.06l6.72-6.72H15a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M22 11.016A2.25 2.25 0 0 1 18.75 9v-.568l-4.159 4.159a2.25 2.25 0 1 1-3.182-3.182l4.159-4.159H15A2.25 2.25 0 0 1 12.984 2H12C7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12z"
    />
  </Svg>
);
export default SvgSquareTopDown;
