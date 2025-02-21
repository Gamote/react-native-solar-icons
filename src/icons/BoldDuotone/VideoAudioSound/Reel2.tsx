import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgReel2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2 12c0 5.523 4.477 10 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A9.99 9.99 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12"
      opacity={0.5}
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M5.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M13 18.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M18.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </Svg>
);
export default SvgReel2;
