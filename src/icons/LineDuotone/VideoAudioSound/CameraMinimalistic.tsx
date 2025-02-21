import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCameraMinimalistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={13} r={3} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M10 20h4c2.809 0 4.214 0 5.222-.674a4 4 0 0 0 1.104-1.104C21 17.213 21 15.81 21 13s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C18.213 6 16.81 6 14 6h-4c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C3 8.787 3 10.19 3 12.998V13c0 2.809 0 4.213.674 5.222.292.437.667.812 1.104 1.104C5.787 20 7.19 20 10 20Z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18 10h-.5"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.5 3.5h-5"
      opacity={0.5}
    />
  </Svg>
);
export default SvgCameraMinimalistic;
