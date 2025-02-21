import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLadle = (props: SvgProps) => (
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
      d="M2 5.684a3.684 3.684 0 0 1 7.368 0v10a6.316 6.316 0 0 0 12.632 0V14.5"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M22 14.5c0 1.38-2.946 2.5-6 2.5s-6.5-1.12-6.5-2.5S12.946 12 16 12s6 1.12 6 2.5Z"
    />
  </Svg>
);
export default SvgLadle;
