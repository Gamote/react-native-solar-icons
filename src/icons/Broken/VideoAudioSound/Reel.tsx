import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgReel = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 22h10" />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M13.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13.5 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
    />
  </Svg>
);
export default SvgReel;
