import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlashlightOn = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM6.53 2.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06-1.06zM18.53 2.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06M20 10v.25H4V10c0-.943 0-1.414.293-1.707S5.057 8 6 8h12c.943 0 1.414 0 1.707.293S20 9.057 20 10M16.172 14.828c-.163.163-.302.302-.422.427v-.005h-7.5v.005c-.12-.125-.26-.264-.421-.427L4.75 11.75h14.5z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M9 20v-2.343c0-.378 0-.668-.015-.907h6.03c-.015.24-.015.53-.015.907V20c0 .943 0 1.414-.293 1.707S13.943 22 13 22h-2c-.943 0-1.414 0-1.707-.293S9 20.943 9 20m3-1.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFlashlightOn;
