import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWomen = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={9} r={7} fill="#000" opacity={0.5} />
    <Path
      fill="#000"
      d="M11.25 15.96v1.79H9.5a.75.75 0 1 0 0 1.5h1.75V22a.75.75 0 0 0 1.5 0v-2.75h1.75a.75.75 0 0 0 0-1.5h-1.75v-1.79a7 7 0 0 1-1.5 0"
    />
  </Svg>
);
export default SvgWomen;
