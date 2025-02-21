import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWidget3 = (props: SvgProps) => (
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
      d="M2.5 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM13.5 17.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M21.5 6.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM10.5 17.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
    />
  </Svg>
);
export default SvgWidget3;
