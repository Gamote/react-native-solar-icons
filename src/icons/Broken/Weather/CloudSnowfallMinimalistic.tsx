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
      d="M22 13.353c0 2.343-1.444 4.353-3.5 5.207M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228c.889.304 1.678.82 2.307 1.485"
    />
  </Svg>
);
export default SvgCloudSnowfallMinimalistic;
