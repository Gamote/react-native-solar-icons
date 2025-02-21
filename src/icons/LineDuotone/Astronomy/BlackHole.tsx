import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBlackHole = (props: SvgProps) => (
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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 10c5 0 4.6 12-3 12"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.312 14c-5 0-4.6-12 3-12"
    />
    <Path
      stroke="#000"
      strokeDasharray="2 2"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.632 10.696c3.535-3.535 11.737 5.233 6.363 10.607"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeDasharray="2 2"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.68 13.304C10.145 16.84 1.942 8.07 7.316 2.697"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeDasharray="2 2"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.852 13.524C7.316 9.99 16.084 1.786 21.458 7.16"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeDasharray="2 2"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.46 10.476c3.535 3.535-5.233 11.738-10.607 6.364"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 12.312c0-5 12-4.6 12 3"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14 12c0 5-12 4.6-12-3"
    />
  </Svg>
);
export default SvgBlackHole;
