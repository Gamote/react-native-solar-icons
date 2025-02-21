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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2.6 6a6.796 6.796 0 0 1 11.002-2.01l6.407 6.408A6.77 6.77 0 0 1 21.894 14M2.107 10a6.77 6.77 0 0 0 1.884 3.602l6.407 6.407A6.796 6.796 0 0 0 21.4 18"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M16.806 7.194s-.541 2.806-3.674 5.939-5.938 3.673-5.938 3.673"
    />
  </Svg>
);
export default SvgPill;
