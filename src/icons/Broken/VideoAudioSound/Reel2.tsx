import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgReel2 = (props: SvgProps) => (
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
      d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
    />
    <Path
      fill="#000"
      d="M19.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 17.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
    />
  </Svg>
);
export default SvgReel2;
