import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHanger = (props: SvgProps) => (
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
      d="M9.536 6.91c0-1.055.95-1.91 2.124-1.91 1.173 0 2.124.855 2.124 1.91 0 .495-.18.947-.492 1.287-.597.65-1.49 1.305-1.49 2.149v.284m0 0a3.66 3.66 0 0 1 2.082.61l7.433 5.01c1.306.881.613 2.75-1.02 2.75H3.703c-1.616 0-2.32-1.835-1.048-2.73l7.096-4.991a3.64 3.64 0 0 1 2.05-.65Z"
    />
  </Svg>
);
export default SvgHanger;
