import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPill = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M3.99 13.602a6.796 6.796 0 0 1 9.612-9.611l6.407 6.407a6.796 6.796 0 1 1-9.61 9.611z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M16.806 7.194s-.541 2.806-3.674 5.939-5.938 3.673-5.938 3.673"
      opacity={0.5}
    />
  </Svg>
);
export default SvgPill;
