import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgReciveTwiceSquare = (props: SvgProps) => (
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
      d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M7 14.75a.75.75 0 0 0 0 1.5h4.929l-1.41 1.174a.75.75 0 0 0 .961 1.152l3-2.5a.75.75 0 0 0 0-1.152l-3-2.5a.75.75 0 0 0-.96 1.152l1.409 1.174zM6.25 8.5A.75.75 0 0 1 7 7.75h4.929l-1.41-1.174a.75.75 0 0 1 .961-1.152l3 2.5a.75.75 0 0 1 0 1.152l-3 2.5a.75.75 0 0 1-.96-1.152l1.409-1.174H7a.75.75 0 0 1-.75-.75M17.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgReciveTwiceSquare;
