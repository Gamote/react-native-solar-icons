import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlashlight = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M20 4.25H4V4c0-.943 0-1.414.293-1.707S5.057 2 6 2h12c.943 0 1.414 0 1.707.293S20 3.057 20 4zM16.172 8.828c-.163.163-.302.302-.422.427V9.25h-7.5v.005c-.12-.125-.26-.264-.421-.427L4.75 5.75h14.5z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M9 11.657V19c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C15 20.398 15 19.932 15 19v-7.343c0-.377 0-.668.015-.907h-6.03c.015.24.015.53.015.907M12.75 13a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFlashlight;
