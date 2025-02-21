import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapPointWave = (props: SvgProps) => (
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
      d="M5.875 12.573C5.308 11.25 5 9.84 5 8.515 5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.28 3.28 0 0 1-2.56 0c-1.113-.476-2.099-1.225-2.925-2.14"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20.96 15.5c.666.602 1.04 1.282 1.04 2 0 .925-.62 1.785-1.684 2.5M3.04 15.5C2.374 16.102 2 16.782 2 17.5 2 19.985 6.477 22 12 22c1.653 0 3.212-.18 4.586-.5"
    />
  </Svg>
);
export default SvgMapPointWave;
