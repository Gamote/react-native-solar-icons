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
      d="M15.665 2.83a.75.75 0 0 1 1.006.335l.5 1a.75.75 0 1 1-1.342.67l-.5-1a.75.75 0 0 1 .336-1.006"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M1.25 14.5a8.25 8.25 0 0 1 13.53-6.34l1.69-1.69a.75.75 0 1 1 1.06 1.06l-1.69 1.69A8.25 8.25 0 1 1 1.25 14.5M9.5 7.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M19.835 6.83a.75.75 0 1 0-.67 1.34l1 .5a.75.75 0 1 0 .67-1.34zM20.53 4.53a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06z"
    />
  </Svg>
);
export default SvgBombMinimalistic;
