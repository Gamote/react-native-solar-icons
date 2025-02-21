import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRadar = (props: SvgProps) => (
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
      d="M12 12 5.002 6.335c-.43-.347-1.063-.283-1.366.178a10 10 0 0 0-1.295 2.898C.91 14.746 4.077 20.23 9.41 21.66c5.336 1.43 10.819-1.737 12.248-7.071C23.09 9.253 19.923 3.77 14.59 2.34a9.97 9.97 0 0 0-7.502.95"
    />
  </Svg>
);
export default SvgRadar;
