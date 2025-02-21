import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStop = (props: SvgProps) => (
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
      d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535l17.072-17.07C19.07 2 16.714 2 12 2S4.929 2 3.464 3.464"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M3.465 20.536C4.929 22 7.286 22 12 22s7.071 0 8.536-1.464C22 19.07 22 16.714 22 12s0-7.07-1.464-8.535z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgStop;
