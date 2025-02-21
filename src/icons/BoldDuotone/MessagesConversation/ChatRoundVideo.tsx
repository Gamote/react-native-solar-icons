import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChatRoundVideo = (props: SvgProps) => (
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
      d="M13.22 9.447C15.073 10.586 16 11.156 16 12c0 .845-.927 1.414-2.78 2.553-1.88 1.155-2.819 1.732-3.52 1.308C9 15.437 9 14.291 9 12s0-3.437.7-3.861c.701-.424 1.64.153 3.52 1.308"
    />
  </Svg>
);
export default SvgChatRoundVideo;
