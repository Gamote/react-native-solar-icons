import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBlackHole2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={12} r={2} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeDasharray="2 2"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.142 10.363C13.688 6.817 21.914 15.61 16.524 21"
    />
    <Path
      stroke="#000"
      strokeDasharray="2 2"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.858 13.637C10.312 17.183 2.086 8.39 7.476 3"
    />
    <Path
      stroke="#000"
      strokeDasharray="2 2"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.363 13.858C6.817 10.312 15.61 2.086 21 7.476"
    />
    <Path
      stroke="#000"
      strokeDasharray="2 2"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.637 10.142C17.183 13.688 8.39 21.914 3 16.524"
    />
  </Svg>
);
export default SvgBlackHole2;
