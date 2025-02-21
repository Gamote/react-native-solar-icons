import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBowling = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M8 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
    />
  </Svg>
);
export default SvgBowling;
