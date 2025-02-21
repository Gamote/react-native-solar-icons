import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowToDownRight = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M6.47 13.97a.75.75 0 0 0 0 1.06l5 5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06l-3.72 3.72V9.5c0-.713.22-1.8.859-2.687.61-.848 1.635-1.563 3.391-1.563a.75.75 0 0 0 0-1.5c-2.244 0-3.72.952-4.609 2.187-.861 1.196-1.141 2.61-1.141 3.563v8.19l-3.72-3.72a.75.75 0 0 0-1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowToDownRight;
