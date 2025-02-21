import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEndCallRounded = (props: SvgProps) => (
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
      d="m6.947 16.517-1.34.38C3.782 17.415 2 15.91 2 13.85c0-1.237.277-2.477 1.083-3.347C4.128 9.376 6 7.908 9 7.292v6.326c0 1.365-.844 2.556-2.053 2.9M15 13.618c0 1.365.844 2.556 2.053 2.9l1.34.38C20.218 17.414 22 15.91 22 13.85c0-1.237-.277-2.477-1.083-3.347C19.872 9.376 18 7.908 15 7.292z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M9 13.619s0-1.655 3-1.655 3 1.654 3 1.654V7.292A15 15 0 0 0 12 7c-1.106 0-2.103.108-3 .292z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgEndCallRounded;
