import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextItalic = (props: SvgProps) => (
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
      d="M14.983 1.25H9a.75.75 0 1 0 0 1.5h4.992l-5.55 18.5H3a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-4.992l5.55-18.5H21a.75.75 0 0 0 0-1.5h-6.017"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTextItalic;
