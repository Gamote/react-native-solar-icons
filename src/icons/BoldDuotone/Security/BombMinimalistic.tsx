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
      d="M17 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M16.67 3.165a.75.75 0 1 0-1.34.67l.5 1a.75.75 0 1 0 1.34-.67zM19.835 6.83a.75.75 0 1 0-.67 1.34l1 .5a.75.75 0 1 0 .67-1.34zM20.53 4.53a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06zM15.307 9.753 17.53 7.53a.75.75 0 0 0-1.06-1.06l-2.224 2.223q.584.478 1.061 1.06"
    />
  </Svg>
);
export default SvgBombMinimalistic;
