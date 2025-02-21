import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgReel = (props: SvgProps) => (
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
      d="M2 12c0 5.523 4.477 10 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A9.99 9.99 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12"
      clipRule="evenodd"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M16.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M9 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M13.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.5 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </Svg>
);
export default SvgReel;
