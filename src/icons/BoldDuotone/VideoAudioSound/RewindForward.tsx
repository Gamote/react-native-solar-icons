import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRewindForward = (props: SvgProps) => (
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
      d="M2 6.426v11.148c0 1.847 1.6 3.015 2.903 2.118L11 15.232V8.768l-6.097-4.46C3.601 3.411 2 4.58 2 6.426"
      clipRule="evenodd"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M11 7.123v9.754c0 1.616 1.467 2.638 2.661 1.853l7.418-4.877c1.228-.807 1.228-2.899 0-3.706L13.66 5.27C12.467 4.485 11 5.507 11 7.123"
    />
  </Svg>
);
export default SvgRewindForward;
