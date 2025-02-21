import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgScissors = (props: SvgProps) => (
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
      d="M16.401 20.5 6 2m16 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM7.599 20.5 18 2M2 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
    />
  </Svg>
);
export default SvgScissors;
