import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgList = (props: SvgProps) => (
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
      d="M17 3.25a.75.75 0 0 1 .6.3l3 4a.75.75 0 1 1-1.2.9l-1.65-2.2v11.5l1.65-2.2a.75.75 0 0 1 1.2.9l-3 4a.75.75 0 0 1-1.2 0l-3-4a.75.75 0 0 1 1.2-.9l1.65 2.2V6.25l-1.65 2.2a.75.75 0 1 1-1.2-.9l3-4a.75.75 0 0 1 .6-.3"
      clipRule="evenodd"
    />
    <G fill="#000" opacity={0.5}>
      <Path d="M3.25 7A.75.75 0 0 1 4 6.25h7a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7M3.25 12a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75M3.25 17a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" />
    </G>
  </Svg>
);
export default SvgList;
