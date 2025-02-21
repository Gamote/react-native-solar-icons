import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSquareAcademicCap = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M14.217 3.5a5.17 5.17 0 0 0-4.434 0L3.092 6.637c-1.076.504-1.357 1.927-.842 2.91V14.5a.75.75 0 0 0 1.5 0v-3.828L9.783 13.5a5.17 5.17 0 0 0 4.434 0l6.691-3.137c1.456-.682 1.456-3.044 0-3.726z"
    />
    <Path
      fill="#000"
      d="m5 11.258 4.783 2.243a5.17 5.17 0 0 0 4.434 0L19 11.258v5.368c0 1.008-.503 1.951-1.385 2.44C16.146 19.879 13.796 21 12 21s-4.146-1.121-5.615-1.934C5.504 18.577 5 17.634 5 16.626z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgSquareAcademicCap;
