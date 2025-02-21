import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMinimizeSquare2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM6.46967 17.5303C6.17678 17.2374 6.17678 16.7626 6.46967 16.4697L8.68934 14.25H7.5C7.08579 14.25 6.75 13.9142 6.75 13.5C6.75 13.0858 7.08579 12.75 7.5 12.75H10.5C10.9142 12.75 11.25 13.0858 11.25 13.5V16.5C11.25 16.9142 10.9142 17.25 10.5 17.25C10.0858 17.25 9.75 16.9142 9.75 16.5V15.3107L7.53033 17.5303C7.23744 17.8232 6.76256 17.8232 6.46967 17.5303ZM16.5 11.25C16.9142 11.25 17.25 10.9142 17.25 10.5C17.25 10.0858 16.9142 9.75 16.5 9.75H15.3107L17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L14.25 8.68934V7.5C14.25 7.08579 13.9142 6.75 13.5 6.75C13.0858 6.75 12.75 7.08579 12.75 7.5V10.5C12.75 10.9142 13.0858 11.25 13.5 11.25H16.5ZM6.75 10.5C6.75 10.9142 7.08579 11.25 7.5 11.25H10.5C10.9142 11.25 11.25 10.9142 11.25 10.5V7.5C11.25 7.08579 10.9142 6.75 10.5 6.75C10.0858 6.75 9.75 7.08579 9.75 7.5V8.68934L7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L8.68934 9.75H7.5C7.08579 9.75 6.75 10.0858 6.75 10.5ZM17.5303 16.4697C17.8232 16.7626 17.8232 17.2374 17.5303 17.5303C17.2374 17.8232 16.7626 17.8232 16.4697 17.5303L14.25 15.3107V16.5C14.25 16.9142 13.9142 17.25 13.5 17.25C13.0858 17.25 12.75 16.9142 12.75 16.5V13.5C12.75 13.0858 13.0858 12.75 13.5 12.75H16.5C16.9142 12.75 17.25 13.0858 17.25 13.5C17.25 13.9142 16.9142 14.25 16.5 14.25H15.3107L17.5303 16.4697Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMinimizeSquare2;
