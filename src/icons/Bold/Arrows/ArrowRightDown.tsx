import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowRightDown = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M5.47 6.53a.75.75 0 0 1 1.06-1.06l6.97 6.97 3.97-3.97a.75.75 0 0 1 1.28.53v9a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.53-1.28l3.97-3.97z"
    />
  </Svg>
);
export default SvgArrowRightDown;
