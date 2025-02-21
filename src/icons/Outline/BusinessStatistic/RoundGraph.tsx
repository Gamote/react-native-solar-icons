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
      d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12a10.72 10.72 0 0 1 3.225-7.677.75.75 0 1 1 1.05 1.071A9.22 9.22 0 0 0 2.75 12 9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75"
    />
    <Path
      fill="#000"
      d="M11.25 5a.75.75 0 0 1 .75-.75A7.75 7.75 0 1 1 4.25 12a.75.75 0 0 1 1.5 0A6.25 6.25 0 1 0 12 5.75a.75.75 0 0 1-.75-.75"
    />
    <Path
      fill="#000"
      d="M12 7.25a.75.75 0 0 0 0 1.5 3.25 3.25 0 0 1 0 6.5.75.75 0 0 0 0 1.5 4.75 4.75 0 1 0 0-9.5"
    />
  </Svg>
);
export default SvgRoundGraph;
