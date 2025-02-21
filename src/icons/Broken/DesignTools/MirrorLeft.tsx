import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMirrorLeft = (props: SvgProps) => (
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
      d="M3 12c0 4.243 0 6.364 1.318 7.682S7.758 21 12 21m0-18C7.757 3 5.636 3 4.318 4.318 3.502 5.134 3.192 6.257 3.073 8"
    />
    <Path
      stroke="#000"
      strokeDasharray="2.5 3"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11 21h4c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15V9c0-2.828 0-4.243-.879-5.121C19.243 3 17.828 3 15 3h-4"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 22V2" />
  </Svg>
);
export default SvgMirrorLeft;
