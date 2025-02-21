import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUndoRightRound = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M16.47 3.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06L18.94 7l-2.47-2.47a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M18.19 6.25H9a5.75 5.75 0 0 0 0 11.5h7a.75.75 0 0 0 0-1.5H9a4.25 4.25 0 0 1 0-8.5h9.19l.75-.75z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgUndoRightRound;
