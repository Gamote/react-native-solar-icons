import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMaximizeSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.25 6.25C12.8358 6.25 12.5 6.58579 12.5 7C12.5 7.41421 12.8358 7.75 13.25 7.75H15.1893L11.4697 11.4697L7.75 15.1893V13.25C7.75 12.8358 7.41421 12.5 7 12.5C6.58579 12.5 6.25 12.8358 6.25 13.25V17C6.25 17.4142 6.58579 17.75 7 17.75H10.75C11.1642 17.75 11.5 17.4142 11.5 17C11.5 16.5858 11.1642 16.25 10.75 16.25H8.81066L12.5303 12.5303L16.25 8.81066V10.75C16.25 11.1642 16.5858 11.5 17 11.5C17.4142 11.5 17.75 11.1642 17.75 10.75V7C17.75 6.58579 17.4142 6.25 17 6.25H13.25Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMaximizeSquare;
