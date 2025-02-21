import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStreetsMapPoint = (props: SvgProps) => (
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
      d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M5.5 8.757C5.5 6.958 7.067 5.5 9 5.5s3.5 1.458 3.5 3.257c0 1.785-1.117 3.868-2.86 4.613a1.64 1.64 0 0 1-1.28 0c-1.743-.745-2.86-2.828-2.86-4.613Z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m14 14 6.5 6.5M14 14l-7.605 7.605M14 14l7.607-7.606"
      opacity={0.5}
    />
    <Path fill="#000" d="M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0" opacity={0.5} />
  </Svg>
);
export default SvgStreetsMapPoint;
