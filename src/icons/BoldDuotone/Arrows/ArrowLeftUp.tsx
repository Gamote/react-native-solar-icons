import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowLeftUp = (props: SvgProps) => (
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
      d="M6.53 15.53A.75.75 0 0 1 5.25 15V6A.75.75 0 0 1 6 5.25h9a.75.75 0 0 1 .53 1.28z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M18.53 17.47a.75.75 0 1 1-1.06 1.06l-6.97-6.97 1.06-1.06z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgArrowLeftUp;
