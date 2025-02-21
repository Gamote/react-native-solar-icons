import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlaybackSpeed = (props: SvgProps) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2"
    />
    <Path
      stroke="#000"
      strokeDasharray="4 3"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z"
    />
  </Svg>
);
export default SvgPlaybackSpeed;
