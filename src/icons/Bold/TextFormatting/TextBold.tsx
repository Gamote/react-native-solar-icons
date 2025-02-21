import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextBold = (props: SvgProps) => (
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
      d="M7.609 1A3.61 3.61 0 0 0 4 4.609V19.94C4 21.631 5.37 23 7.059 23H14a6 6 0 0 0 2.102-11.621A6 6 0 0 0 12 1zM12 11a4 4 0 0 0 0-8H7.609C6.72 3 6 3.72 6 4.609V11zm-6 2v6.941C6 20.526 6.474 21 7.059 21H14a4 4 0 0 0 0-8z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTextBold;
