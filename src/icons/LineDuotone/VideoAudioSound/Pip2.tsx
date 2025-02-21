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
      strokeWidth={1.5}
      d="M2 12c0-3.75 0-5.625.955-6.939A5 5 0 0 1 4.06 3.955C5.375 3 7.251 3 11 3h2c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C22 6.375 22 8.251 22 12s0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C18.625 21 16.749 21 13 21h-2c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C2 17.625 2 15.749 2 12Z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M11 14c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C12.602 11 13.068 11 14 11h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C18 12.602 18 13.068 18 14s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C16.398 17 15.932 17 15 17h-1c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C11 15.398 11 14.932 11 14Z"
    />
  </Svg>
);
export default SvgPip2;
