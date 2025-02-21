import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloud = (props: SvgProps) => (
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
      d="M14.381 9.027a5.8 5.8 0 0 1 1.905-.32c.654-.001 1.283.108 1.87.308C20.392 9.78 22 11.881 22 14.353 22 17.472 19.442 20 16.286 20h-10C3.919 20 2 18.104 2 15.765s1.919-4.235 4.286-4.235q.427 0 .83.079c.565.11 1.09.329 1.55.634"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7.116 11.609a5.6 5.6 0 0 1-.354-1.962C6.762 6.528 9.32 4 12.476 4c2.94 0 5.361 2.194 5.68 5.015"
      opacity={0.5}
    />
  </Svg>
);
export default SvgCloud;
