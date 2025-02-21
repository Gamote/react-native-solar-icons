import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSleepingSquare = (props: SvgProps) => (
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
      d="M16.375 4.65a.75.75 0 1 1-.75-1.3l3.464-2a.75.75 0 0 1 1.1.844l-.996 3.715 1.896-1.094a.75.75 0 1 1 .75 1.299l-3.464 2a.75.75 0 0 1-1.1-.844l.996-3.715zM12.673 6.15a.75.75 0 1 1 .75-1.3l1.732 1a.75.75 0 0 1-.181 1.374l-.983.264.164.095a.75.75 0 1 1-.75 1.299l-1.732-1a.75.75 0 0 1 .18-1.374l.984-.264z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M13.975 3.02q-.087.18-.141.371a2.25 2.25 0 0 0-3.032 1.968 2.25 2.25 0 0 0 .12 3.822l1.733 1a2.25 2.25 0 0 0 3.357-1.663 2.25 2.25 0 0 0 3.113.894l1.782-1.028C21 9.61 21 11.116 21 13c0 4.714 0 7.071-1.465 8.535C18.072 23 15.715 23 11 23s-7.071 0-8.536-1.465C1 20.072 1 17.714 1 13s0-7.071 1.464-8.536C3.93 3 6.286 3 11 3c1.117 0 2.103 0 2.975.02m-.917 8.479a.75.75 0 1 0-1.116 1.002c.67.744 1.548 1.249 2.558 1.249s1.889-.505 2.558-1.248a.75.75 0 1 0-1.116-1.004c-.465.517-.965.752-1.442.752s-.977-.235-1.442-.751m-8.06-.057a.75.75 0 0 1 1.06.056c.465.517.965.752 1.442.752s.978-.235 1.442-.751a.75.75 0 1 1 1.116 1.002c-.67.744-1.548 1.249-2.558 1.249s-1.889-.505-2.558-1.248a.75.75 0 0 1 .056-1.06M12 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSleepingSquare;
