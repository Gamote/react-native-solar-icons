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
      d="m12.9 15.127-6.04 6.04a2.847 2.847 0 0 1-4.026-4.027l6.039-6.039m11.675-7.65c1.209 1.209-1.45 4.672-3.22 6.442s-6.04 5.234-7.247 4.026M20.548 3.452c-1.208-1.209-4.67 1.45-6.441 3.22s-5.235 6.039-4.026 7.247M20.548 3.452c2.224 2.223 1.825 6.227-.732 8.784s-7.512 3.906-9.735 1.683M20.548 3.452c-2.223-2.224-6.227-1.825-8.784.732s-3.907 7.512-1.683 9.735"
    />
  </Svg>
);
export default SvgWhisk;
