import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTuning4 = (props: SvgProps) => (
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
      d="M16.75 4a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0M14 5.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M12 14.75a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5M10.75 12a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0M10 22.75a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5M8.75 20a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M15.25 12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M14 19.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM10.75 4a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 .75-.75M5 11.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zM4.25 20a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75M19 3.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5z"
    />
  </Svg>
);
export default SvgTuning4;
