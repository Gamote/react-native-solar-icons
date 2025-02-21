import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPaperclipRounded2 = (props: SvgProps) => (
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
      strokeWidth={1.5}
      d="M19.565 16.13a8.25 8.25 0 0 0 0-11.706c-3.248-3.232-8.512-3.232-11.76 0m8.085 15.364a4.17 4.17 0 0 1-5.88 0 4.125 4.125 0 0 1 0-5.853l2.94-2.926M4.131 8.082a7.22 7.22 0 0 0 0 10.243"
    />
  </Svg>
);
export default SvgPaperclipRounded2;
