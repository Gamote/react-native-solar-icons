import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundArrowLeftUp = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M13.5 8.25a.75.75 0 0 1 0 1.5h-2.69l4.72 4.72a.75.75 0 1 1-1.06 1.06l-4.72-4.72v2.69a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 9 8.25z"
    />
  </Svg>
);
export default SvgRoundArrowLeftUp;
