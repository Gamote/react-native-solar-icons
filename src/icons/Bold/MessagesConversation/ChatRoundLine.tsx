import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChatRoundLine = (props: SvgProps) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22m-4-8.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm-.75-2.75A.75.75 0 0 1 8 9.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgChatRoundLine;
