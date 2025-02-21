import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTarget = (props: SvgProps) => (
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
      d="M11.248 2A10.03 10.03 0 0 0 2 11.248h2.98a.752.752 0 1 1 0 1.504H2A10.03 10.03 0 0 0 11.248 22v-2.98a.752.752 0 0 1 1.504 0V22A10.03 10.03 0 0 0 22 12.752h-2.98a.752.752 0 0 1 0-1.504H22A10.03 10.03 0 0 0 12.752 2v2.98a.752.752 0 1 1-1.504 0zM9.242 12c0-.415.337-.752.752-.752h1.254V9.994a.752.752 0 1 1 1.504 0v1.254h1.254a.752.752 0 0 1 0 1.504h-1.254v1.254a.752.752 0 0 1-1.504 0v-1.254H9.994A.75.75 0 0 1 9.242 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTarget;
