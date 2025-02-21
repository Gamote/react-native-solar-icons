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
      d="M9 1h12a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2m-.744 20H3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H8.256"
      clipRule="evenodd"
    />
    <Path fill="#000" d="m13.656 3-5.4 18h2.088l5.4-18z" opacity={0.5} />
  </Svg>
);
export default SvgTextItalic;
