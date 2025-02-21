import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFerrisWheel = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={11} r={2} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M20.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM20.5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5.5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 18.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m13.5 13 5 9M10.5 13l-5 9"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M10.564 3.783a3 3 0 0 1 2.872 0l4.794 2.614a3 3 0 0 1 1.564 2.634v4.938a3 3 0 0 1-1.564 2.634l-4.794 2.614a3 3 0 0 1-2.872 0L5.77 16.603a3 3 0 0 1-1.564-2.634V9.03A3 3 0 0 1 5.77 6.397z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgFerrisWheel;
