import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapArrowDown = (props: SvgProps) => (
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
      d="m16.597 14-3.125 7.007c-.59 1.324-2.354 1.324-2.944 0L3.164 4.497c-.667-1.495.814-3.047 2.202-2.306l5.904 3.152c.459.245 1 .245 1.458 0l5.904-3.152c1.388-.74 2.87.81 2.202 2.306L18.716 9.25"
    />
  </Svg>
);
export default SvgMapArrowDown;
