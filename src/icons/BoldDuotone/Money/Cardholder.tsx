import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCardholder = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z"
      fill={props.primaryColor}
    />
    <Path
      d="M8 15.25C7.58579 15.25 7.25 15.5858 7.25 16C7.25 16.4142 7.58579 16.75 8 16.75H16C16.4142 16.75 16.75 16.4142 16.75 16C16.75 15.5858 16.4142 15.25 16 15.25H8Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 10.25H7H5C4.58579 10.25 4.25 10.5858 4.25 11C4.25 11.4142 4.58579 11.75 5 11.75H19C19.4142 11.75 19.75 11.4142 19.75 11C19.75 10.5858 19.4142 10.25 19 10.25H17Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.7}
      d="M13 6H11C9.11438 6 8.17157 6 7.58579 6.58579C7 7.17157 7 8.11438 7 10V10.25H17V10C17 8.11438 17 7.17157 16.4142 6.58579C15.8284 6 14.8856 6 13 6Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgCardholder;
