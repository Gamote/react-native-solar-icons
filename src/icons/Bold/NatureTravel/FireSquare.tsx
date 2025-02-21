import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFireSquare = (props: SvgProps) => (
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
      d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M17 12.667C17 16.933 13.444 18 11.667 18 10.11 18 7 16.933 7 12.667 7 10.81 8.063 9.633 8.956 9.04c.408-.271.916-.098.942.391.058 1.071.883 1.931 1.523 1.07.584-.788.873-1.858.873-2.501 0-.947.958-1.548 1.707-.968C15.459 8.162 17 10.056 17 12.667"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFireSquare;
