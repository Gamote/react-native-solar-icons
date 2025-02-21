import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMouse = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M19 8.974v6.012C19 18.86 15.866 22 12 22s-7-3.14-7-7.014V8.974A7.01 7.01 0 0 1 11.25 2v3.385c-.591.282-1 .886-1 1.585v2.004c0 .969.784 1.754 1.75 1.754s1.75-.785 1.75-1.754V6.97c0-.7-.409-1.303-1-1.585V2A7.01 7.01 0 0 1 19 8.974"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M13.75 8.974V6.97c0-.7-.409-1.303-1-1.585V2a7 7 0 0 0-1.5 0v3.385c-.591.282-1 .885-1 1.585v2.004c0 .968.784 1.753 1.75 1.753s1.75-.785 1.75-1.753"
    />
  </Svg>
);
export default SvgMouse;
