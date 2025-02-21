import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUsbCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={17} r={1} stroke="#000" strokeWidth={1.5} />
    <Circle cx={8} cy={9} r={1} stroke="#000" strokeWidth={1.5} />
    <Path
      fill="#000"
      d="M11.25 16a.75.75 0 0 0 1.5 0zM12 6l.53-.53a.75.75 0 0 0-1.06 0zm.47 1.53a.75.75 0 1 0 1.06-1.06zm-2-1.06a.75.75 0 0 0 1.06 1.06zm1 .06 1 1 1.06-1.06-1-1zm0-1.06-1 1 1.06 1.06 1-1zM12.75 16v-1.875h-1.5V16zm0-1.875V6h-1.5v8.125z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 10v1.03a2 2 0 0 0 1.403 1.909l1.404.438A1.7 1.7 0 0 1 12 15M16 11v1.03a2 2 0 0 1-1.403 1.909l-1.404.438A1.7 1.7 0 0 0 12 16"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M15 10c0-.471 0-.707.146-.854C15.293 9 15.53 9 16 9s.707 0 .854.146C17 9.293 17 9.53 17 10s0 .707-.146.854C16.707 11 16.47 11 16 11s-.707 0-.854-.146C15 10.707 15 10.47 15 10Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
    />
  </Svg>
);
export default SvgUsbCircle;
