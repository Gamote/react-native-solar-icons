import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserBlock = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M16.5 15.75a2.75 2.75 0 0 0-2.383 4.123l3.756-3.756a2.74 2.74 0 0 0-1.373-.367m2.42 1.442-3.728 3.728a2.75 2.75 0 0 0 3.728-3.728M12.25 18.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M17.996 14.521a4.25 4.25 0 0 0-3.979 7.429Q13.107 22 12 22c-8 0-8-2.015-8-4.5S7.582 13 12 13c2.387 0 4.53.588 5.996 1.521"
      opacity={0.4}
    />
  </Svg>
);
export default SvgUserBlock;
