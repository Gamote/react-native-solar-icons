import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSofa3 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M19.75 12.75c.967-3.884 1.396-5.903.384-7.322a4 4 0 0 0-.215-.275C18.722 3.75 16.481 3.75 12 3.75c-4.48 0-6.72 0-7.918 1.403q-.114.133-.215.275c-1.012 1.42-.583 3.438.384 7.322zM4.75 17.75v2a.75.75 0 0 1-1.5 0v-2.145A2 2 0 0 1 4 13.75h16a2 2 0 0 1 .75 3.855v2.145a.75.75 0 0 1-1.5 0v-2z"
    />
  </Svg>
);
export default SvgSofa3;
