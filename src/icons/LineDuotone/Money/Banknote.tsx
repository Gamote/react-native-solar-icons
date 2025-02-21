import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBanknote = (props: SvgProps) => (
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
      d="M9 19c-2.809 0-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C2 16.213 2 14.81 2 12s0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C4.787 5 6.19 5 9 5h6c2.809 0 4.213 0 5.222.674.437.292.812.667 1.104 1.104C22 7.787 22 9.19 22 12s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C19.213 19 17.81 19 15 19z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.5 15V9M18.5 15V9"
    />
  </Svg>
);
export default SvgBanknote;
