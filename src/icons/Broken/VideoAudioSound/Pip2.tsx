import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPip2 = (props: SvgProps) => (
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
      d="M2 11v1c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C5.375 21 7.251 21 11 21h2c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C22 17.625 22 15.749 22 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C18.625 3 16.749 3 13 3h-2c-3.75 0-5.625 0-6.939.955A5 5 0 0 0 2.955 5.06c-.383.528-.613 1.146-.75 1.939"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M11 14c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C12.602 11 13.068 11 14 11h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C18 12.602 18 13.068 18 14s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C16.398 17 15.932 17 15 17h-1c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C11 15.398 11 14.932 11 14Z"
    />
  </Svg>
);
export default SvgPip2;
