import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMirrorRight = (props: SvgProps) => (
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
      d="M12 21h1c3.771 0 5.657 0 6.828-1.172S21 16.771 21 13v-2c0-3.771 0-5.657-1.172-6.828S16.771 3 13 3h-1"
    />
    <Path
      stroke="#000"
      strokeDasharray="2.5 3"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15V9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h4"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 22V2" />
  </Svg>
);
export default SvgMirrorRight;
