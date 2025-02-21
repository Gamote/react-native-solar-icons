import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSofa = (props: SvgProps) => (
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
      d="M8 18H5.556A3.556 3.556 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444A3.556 3.556 0 0 1 18.444 18H12"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15 5c.93 0 1.394 0 1.78.077a4 4 0 0 1 3.143 3.143C20 8.606 20 9.07 20 10M4 10c0-.93 0-1.394.077-1.78A4 4 0 0 1 7.22 5.077C7.606 5 8.07 5 9 5h2M20 19v-1M4 19v-1"
    />
  </Svg>
);
export default SvgSofa;
