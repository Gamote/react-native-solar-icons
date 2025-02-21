import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBombMinimalistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M15.665 2.83a.75.75 0 0 1 1.006.335l.5 1a.75.75 0 1 1-1.342.67l-.5-1a.75.75 0 0 1 .336-1.006M18.83 7.165a.75.75 0 0 1 1.005-.336l1 .5a.75.75 0 1 1-.67 1.342l-1-.5a.75.75 0 0 1-.336-1.006M20.53 4.53a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06zM17 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0M17.53 7.53l-1.158 1.158a9 9 0 0 0-1.06-1.06L16.47 6.47a.75.75 0 1 1 1.06 1.06"
    />
  </Svg>
);
export default SvgBombMinimalistic;
