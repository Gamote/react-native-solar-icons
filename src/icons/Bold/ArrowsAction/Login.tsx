import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLogin = (props: SvgProps) => (
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
      d="M10.845 8.095a.75.75 0 0 0 0 1.06l1.72 1.72h-8.19a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M12.375 5.877c0 .448.274.84.591 1.157l3 3a2.25 2.25 0 0 1 0 3.182l-3 3c-.317.317-.591.709-.591 1.157v2.252a8 8 0 1 0 0-16z"
    />
  </Svg>
);
export default SvgLogin;
