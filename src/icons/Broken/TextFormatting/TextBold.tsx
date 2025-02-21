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
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5 12h7a5 5 0 0 0 0-10H7.609A2.61 2.61 0 0 0 5 4.609zm0 0h9a5 5 0 0 1 0 10H7.059C5.922 22 5 21.137 5 20m0-8v3.97"
    />
  </Svg>
);
export default SvgTextBold;
