import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCalendarSearch = (props: SvgProps) => (
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
      d="M22 14v-2c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4m0 18h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4M7 4V2.5M17 4V2.5"
    />
    <Circle cx={18} cy={18} r={3} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20.5 20.5 22 22M21.5 9H10.75M2 9h3.875"
    />
  </Svg>
);
export default SvgCalendarSearch;
