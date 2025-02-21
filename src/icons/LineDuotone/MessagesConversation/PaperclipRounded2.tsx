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
      d="m12.95 11.009-2.94 2.926a4.125 4.125 0 0 0 0 5.853 4.17 4.17 0 0 0 5.88 0l3.675-3.658a8.25 8.25 0 0 0 0-11.706c-3.248-3.232-8.512-3.232-11.76 0L4.132 8.082a7.22 7.22 0 0 0 0 10.243"
    />
  </Svg>
);
export default SvgPaperclipRounded2;
