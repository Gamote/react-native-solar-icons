import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEraserCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M11.606 7.67C12.72 6.557 13.276 6 13.968 6s1.249.557 2.362 1.67S18 9.34 18 10.032s-.557 1.248-1.67 2.362l-2.619 2.618-4.723-4.723zM7.927 11.35l4.724 4.723-.257.257C11.28 17.443 10.724 18 10.032 18s-1.249-.557-2.362-1.67S6 14.66 6 13.968s.557-1.248 1.67-2.362z"
    />
  </Svg>
);
export default SvgEraserCircle;
