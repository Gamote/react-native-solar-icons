import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloudSnowfallMinimalistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={18} r={1} fill="#000" />
    <Circle cx={12} cy={21} r={1} fill="#000" />
    <Path
      fill="#000"
      d="M16 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52"
      opacity={0.5}
    />
  </Svg>
);
export default SvgCloudSnowfallMinimalistic;
