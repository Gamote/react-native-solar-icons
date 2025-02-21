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
      d="M2 12c0 5.523 4.477 10 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A9.99 9.99 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12m10-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-4.5-7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgReel;
