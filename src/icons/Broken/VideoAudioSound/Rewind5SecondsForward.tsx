import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRewind5SecondsForward = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 4.5 12 2C6.477 2 2 6.477 2 12q.002 1.03.2 2M16 2.832C19.532 4.375 22 7.9 22 12c0 5.523-4.477 10-10 10a9.98 9.98 0 0 1-8-4"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H12a2 2 0 1 1 0 4h-2"
    />
  </Svg>
);
export default SvgRewind5SecondsForward;
