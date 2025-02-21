import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSquareBottomDown = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M13 21.9994C17.0551 21.9921 19.1785 21.8926 20.5356 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5356 3.46447C19.0711 2 16.7141 2 12 2C7.28599 2 4.92896 2 3.4645 3.46447C2.10747 4.8215 2.00791 6.94493 2.00061 11"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11 13L3 21M3 21H9M3 21V15"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgSquareBottomDown;
