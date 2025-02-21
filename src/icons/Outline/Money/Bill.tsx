import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBill = (props: SvgProps) => (
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
      d="M8.127 3.56a.943.943 0 0 0-1.254 0c-.885.788-2.2.822-3.123.103v16.674a2.444 2.444 0 0 1 3.123.103.943.943 0 0 0 1.254 0 2.443 2.443 0 0 1 3.246 0 .943.943 0 0 0 1.254 0 2.443 2.443 0 0 1 3.246 0 .943.943 0 0 0 1.254 0 2.444 2.444 0 0 1 3.123-.103V3.663a2.444 2.444 0 0 1-3.123-.102.943.943 0 0 0-1.254 0 2.443 2.443 0 0 1-3.246 0 .943.943 0 0 0-1.254 0 2.443 2.443 0 0 1-3.246 0m-2.25-1.12a2.443 2.443 0 0 1 3.246 0 .943.943 0 0 0 1.254 0 2.443 2.443 0 0 1 3.246 0 .943.943 0 0 0 1.254 0 2.443 2.443 0 0 1 3.246 0 .943.943 0 0 0 1.254 0c.92-.818 2.373-.165 2.373 1.065v16.99c0 1.23-1.454 1.883-2.373 1.066a.943.943 0 0 0-1.254 0 2.443 2.443 0 0 1-3.246 0 .943.943 0 0 0-1.254 0 2.443 2.443 0 0 1-3.246 0 .943.943 0 0 0-1.254 0 2.443 2.443 0 0 1-3.246 0 .943.943 0 0 0-1.254 0c-.92.817-2.373.164-2.373-1.066V3.505c0-1.23 1.454-1.883 2.373-1.066a.943.943 0 0 0 1.254 0M6.75 8.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBill;
