import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAltArrowDown = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m8.303 12.404 3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723z"
    />
    <Path
      fill="#000"
      d="M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgAltArrowDown;
