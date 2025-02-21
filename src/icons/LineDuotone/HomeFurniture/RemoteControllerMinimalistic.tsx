import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRemoteControllerMinimalistic = (props: SvgProps) => (
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
      d="M5 9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2s4.213 0 5.222.674c.437.292.812.667 1.104 1.104C19 4.787 19 6.19 19 9v6c0 2.809 0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <Circle cx={12} cy={5} r={1} fill="#000" />
    <Circle cx={12} cy={17} r={1} fill="#000" />
  </Svg>
);
export default SvgRemoteControllerMinimalistic;
