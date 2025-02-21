import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextBold = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5 4.6087C5 3.16795 6.16795 2 7.6087 2H12C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12H5V4.6087Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M5 12H14C16.7614 12 19 14.2386 19 17C19 19.7614 16.7614 22 14 22H7.05882C5.92177 22 5 21.0782 5 19.9412V12Z"
      stroke="black"
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgTextBold;
