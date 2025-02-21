import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFilters = (props: SvgProps) => (
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
      d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M6.5 10.189a6 6 0 1 0 7.106 3.669"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 20.472a6 6 0 1 0 5.5-10.283"
      opacity={0.5}
    />
  </Svg>
);
export default SvgFilters;
