import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSquareBottomUp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.25 13C4.25 12.5858 4.58579 12.25 5 12.25H11C11.4142 12.25 11.75 12.5858 11.75 13V19C11.75 19.4142 11.4142 19.75 11 19.75C10.5858 19.75 10.25 19.4142 10.25 19V14.8107L3.53033 21.5303C3.23744 21.8232 2.76256 21.8232 2.46967 21.5303C2.17678 21.2374 2.17678 20.7626 2.46967 20.4697L9.18934 13.75H5C4.58579 13.75 4.25 13.4142 4.25 13Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSquareBottomUp;
