import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArchiveDownMinimlistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12 2c4.713 0 7.07 0 8.535 1.464.757.758 1.123 1.754 1.3 3.192V10H2.164V6.656c.176-1.438.541-2.434 1.299-3.192C4.928 2 7.285 2 11.999 2"
      opacity={0.5}
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14m10.75-3a.75.75 0 0 0-1.5 0v4.19l-1.22-1.22a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArchiveDownMinimlistic;
