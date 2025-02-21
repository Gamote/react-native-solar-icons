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
      d="M2 5.684a3.684 3.684 0 0 1 7.368 0V15"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M22 14.5v1.184a6.316 6.316 0 0 1-12.632 0v-1.052M22 14.5c0 1.38-2.946 2.5-6 2.5s-6.632-.988-6.632-2.368M22 14.5c0-1.38-2.946-2.5-6-2.5s-6.632 1.25-6.632 2.632"
    />
  </Svg>
);
export default SvgLadle;
