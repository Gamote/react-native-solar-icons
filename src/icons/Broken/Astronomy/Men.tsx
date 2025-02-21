import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMen = (props: SvgProps) => (
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
      d="M6 7.07A8 8 0 1 1 3.07 10"
    />
    <Path
      fill="#000"
      d="M22 2h.75a.75.75 0 0 0-.75-.75zm-.75 5a.75.75 0 0 0 1.5 0zM17 1.25a.75.75 0 0 0 0 1.5zm-.97 7.78 6.5-6.5-1.06-1.06-6.5 6.5zM21.25 2v5h1.5V2zM17 2.75h5v-1.5h-5z"
    />
  </Svg>
);
export default SvgMen;
