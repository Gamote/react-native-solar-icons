import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWhisk = (props: SvgProps) => (
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
      d="M19.816 12.236c2.557-2.557 2.956-6.561.733-8.784-2.224-2.224-6.228-1.825-8.785.732s-3.907 7.512-1.683 9.735c2.223 2.223 7.178.874 9.735-1.683Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="m12.9 15.127-6.04 6.039a2.847 2.847 0 0 1-4.026-4.026l6.039-6.039"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M20.549 3.451c1.208 1.209-1.45 4.672-3.221 6.442-1.77 1.77-6.04 5.234-7.247 4.026-1.208-1.208 2.256-5.476 4.026-7.247s5.233-4.429 6.442-3.22Z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgWhisk;
