import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTuningSquare = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M16 15.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M9.25 10a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m6.75-8a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0M8 7.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m8 3.5a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-.75.75M7.25 14a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-1.5 0zM16 19.75a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-.75.75M7.25 5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTuningSquare;
