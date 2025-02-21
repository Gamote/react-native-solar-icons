import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUfo = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#8E93A6"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m5.5 15.5-1 2M18.5 15.5l1 2"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M17 8.21c2.989.723 5 2.071 5 3.616C22 14.131 17.523 16 12 16S2 14.13 2 11.826c0-1.545 2.011-2.893 5-3.615"
    />
    <Path
      stroke="#8E93A6"
      strokeWidth={1.5}
      d="M7 8.729A4.73 4.73 0 0 1 11.729 4h.542A4.73 4.73 0 0 1 17 8.729c0 .177-.054.35-.2.451-.414.288-1.61.82-4.8.82s-4.386-.532-4.8-.82c-.146-.1-.2-.274-.2-.451Z"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 16v3" />
    <Circle cx={12} cy={13} r={1} fill="#8E93A6" />
    <Circle cx={7} cy={12} r={1} fill="#000" />
    <Circle cx={17} cy={12} r={1} fill="#000" />
  </Svg>
);
export default SvgUfo;
