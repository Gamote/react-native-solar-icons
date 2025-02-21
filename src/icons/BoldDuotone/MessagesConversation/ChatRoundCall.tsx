import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChatRoundCall = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22"
      opacity={0.5}
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 6.775a.825.825 0 0 0-.825.825v8.8a.825.825 0 0 0 1.65 0V7.6A.825.825 0 0 0 12 6.775M7.6 8.975a.825.825 0 0 0-.825.825v4.4a.825.825 0 0 0 1.65 0V9.8a.825.825 0 0 0-.825-.825"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M15.575 9.8a.825.825 0 0 1 1.65 0v4.4a.825.825 0 0 1-1.65 0z"
    />
  </Svg>
);
export default SvgChatRoundCall;
