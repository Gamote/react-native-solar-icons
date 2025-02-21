import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChart = (props: SvgProps) => (
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
      d="M14 20.5V4.25c0-.728-.002-1.2-.048-1.546-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172C12.949 2.002 12.478 2 11.75 2s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546V20.5z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M8 8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H8zM20 13.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H20z"
      opacity={0.7}
    />
    <Path
      fill="#000"
      d="M1.75 20.5a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-20"
      opacity={0.5}
    />
  </Svg>
);
export default SvgChart;
