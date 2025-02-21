import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundGraph = (props: SvgProps) => (
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
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m9.25-7a.75.75 0 0 1 .75-.75A7.75 7.75 0 1 1 4.25 12a.75.75 0 0 1 1.5 0A6.25 6.25 0 1 0 12 5.75a.75.75 0 0 1-.75-.75M12 7.25a.75.75 0 0 0 0 1.5 3.25 3.25 0 0 1 0 6.5.75.75 0 0 0 0 1.5 4.75 4.75 0 1 0 0-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRoundGraph;
