import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStar = (props: SvgProps) => (
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
      d="M12 20v-2.4m0-11.2V4m8 8h-2.4M6.4 12H4"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.657 6.343 15.96 8.04m-7.92 7.92-1.697 1.697m0-11.314L8.04 8.04m7.92 7.92 1.697 1.697"
      opacity={0.5}
    />
  </Svg>
);
export default SvgStar;
