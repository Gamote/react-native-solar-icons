import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUndoLeftRoundSquare = (props: SvgProps) => (
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
      d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.716 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m5.795 4.51A.75.75 0 1 0 8.24 6.872l-2.25 2.077a.75.75 0 0 0 0 1.102l2.25 2.077a.75.75 0 1 0 1.018-1.102l-.84-.776h5.62a2.712 2.712 0 0 1 0 5.423H9.5a.75.75 0 1 0 0 1.5h4.539a4.212 4.212 0 0 0 0-8.423h-5.62z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgUndoLeftRoundSquare;
