import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSquareShareLine = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.4697 1.46967C16.7626 1.17678 17.2374 1.17678 17.5303 1.46967L22.5303 6.46967C22.8232 6.76256 22.8232 7.23744 22.5303 7.53033L17.5303 12.5303C17.2374 12.8232 16.7626 12.8232 16.4697 12.5303C16.1768 12.2374 16.1768 11.7626 16.4697 11.4697L20.1893 7.75H14C12.4485 7.75 11.5328 8.50701 11.212 8.82933L11.0211 9.02115L10.8293 9.21205C10.507 9.5328 9.75 10.4485 9.75 12V15C9.75 15.4142 9.41421 15.75 9 15.75C8.58579 15.75 8.25 15.4142 8.25 15V12C8.25 9.91621 9.27703 8.64062 9.77125 8.1488L9.96049 7.96049L10.1488 7.77125C10.6406 7.27703 11.9162 6.25 14 6.25H20.1893L16.4697 2.53033C16.1768 2.23744 16.1768 1.76256 16.4697 1.46967Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSquareShareLine;
