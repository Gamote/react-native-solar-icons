import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCommand = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M16 16h3a3 3 0 1 1-3 3.001zM5 16l3 .001v3a3 3 0 1 1-3-3"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M19 8h-3V5a3 3 0 1 1 3 3M8 8V5a3 3 0 1 0-3 3z"
      clipRule="evenodd"
    />
    <Path fill="#000" d="M16 8H8v8h8z" opacity={0.5} />
  </Svg>
);
export default SvgCommand;
