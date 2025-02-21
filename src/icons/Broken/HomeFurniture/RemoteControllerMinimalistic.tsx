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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 15V9c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104c-.589.881-.663 2.064-.673 4.222M18.81 19c-.1.482-.252.875-.484 1.222a4 4 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15v-3"
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
