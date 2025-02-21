import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRepeatOneMinimalistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M16 12H8" />
    <Path
      fill="#000"
      d="M9.5 19.75a.75.75 0 0 0 0-1.5zM11 5v.75a.75.75 0 0 0 .53-1.28zM9.53 2.47a.75.75 0 0 0-1.06 1.06zM1.25 12a.75.75 0 0 0 1.5 0zm2.62 3.57a.75.75 0 0 0-1.23.86zm5.63 2.68H9v1.5h.5zM9 5.75h2v-1.5H9zm2.53-1.28-2-2-1.06 1.06 2 2zM2.75 12A6.25 6.25 0 0 1 9 5.75v-1.5A7.75 7.75 0 0 0 1.25 12zm-.11 4.43A7.74 7.74 0 0 0 9 19.75v-1.5c-2.123 0-4-1.058-5.13-2.68zM13 19v-.75a.75.75 0 0 0-.53 1.28zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm.03-17.28a.75.75 0 0 0 0 1.5zM22.75 12a.75.75 0 0 0-1.5 0zm-2.62-3.57a.75.75 0 1 0 1.23-.86zM15 18.25h-2v1.5h2zm-2.53 1.28 2 2 1.06-1.06-2-2zM14.5 5.75h.5v-1.5h-.5zM21.25 12A6.25 6.25 0 0 1 15 18.25v1.5A7.75 7.75 0 0 0 22.75 12zm.11-4.43A7.74 7.74 0 0 0 15 4.25v1.5c2.123 0 4 1.058 5.13 2.68z"
    />
  </Svg>
);
export default SvgRepeatOneMinimalistic;
