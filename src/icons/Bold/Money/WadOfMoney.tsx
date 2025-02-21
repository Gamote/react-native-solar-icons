import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWadOfMoney = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M8.25 5c-2.317.006-3.557.063-4.472.674a4 4 0 0 0-1.104 1.104C2 7.787 2 9.19 2 12s0 4.213.674 5.222c.292.437.667.812 1.104 1.104.915.611 2.155.668 4.472.674v-4.094a3.001 3.001 0 0 1 0-5.811zM9.75 19h4.5V5h-4.5zM15.75 5v4.095a3.001 3.001 0 0 1 0 5.81V19c2.317-.006 3.558-.063 4.472-.674a4 4 0 0 0 1.104-1.104C22 16.213 22 14.81 22 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104c-.915-.611-2.155-.668-4.472-.673"
    />
  </Svg>
);
export default SvgWadOfMoney;
