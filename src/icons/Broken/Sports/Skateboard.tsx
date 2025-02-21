import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSkateboard = (props: SvgProps) => (
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
      d="m2 7 .813 1.219A4 4 0 0 0 6.14 10H12m10-3-.812 1.219A4 4 0 0 1 17.859 10H16"
    />
    <Circle cx={7} cy={15} r={2} stroke="#000" strokeWidth={1.5} />
    <Circle cx={17} cy={15} r={2} stroke="#000" strokeWidth={1.5} />
  </Svg>
);
export default SvgSkateboard;
