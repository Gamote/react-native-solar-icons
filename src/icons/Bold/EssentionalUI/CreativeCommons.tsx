import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCreativeCommons = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM13.75 12C13.75 10.253 15.2834 8.75 17.2857 8.75C17.7974 8.75 18.281 8.84961 18.7168 9.02731C19.1003 9.18372 19.5381 8.99958 19.6945 8.61604C19.8509 8.23249 19.6667 7.79477 19.2832 7.63836C18.669 7.38791 17.9931 7.25 17.2857 7.25C14.5541 7.25 12.25 9.32875 12.25 12C12.25 14.6712 14.5541 16.75 17.2857 16.75C17.9931 16.75 18.669 16.6121 19.2832 16.3616C19.6667 16.2052 19.8509 15.7675 19.6945 15.384C19.5381 15.0004 19.1003 14.8163 18.7168 14.9727C18.281 15.1504 17.7974 15.25 17.2857 15.25C15.2834 15.25 13.75 13.747 13.75 12ZM9.28571 8.75C7.28342 8.75 5.75 10.253 5.75 12C5.75 13.747 7.28342 15.25 9.28571 15.25C9.79735 15.25 10.281 15.1504 10.7168 14.9727C11.1003 14.8163 11.5381 15.0004 11.6945 15.384C11.8509 15.7675 11.6667 16.2052 11.2832 16.3616C10.669 16.6121 9.99311 16.75 9.28571 16.75C6.55414 16.75 4.25 14.6712 4.25 12C4.25 9.32875 6.55414 7.25 9.28571 7.25C9.99311 7.25 10.669 7.38791 11.2832 7.63836C11.6667 7.79477 11.8509 8.23249 11.6945 8.61604C11.5381 8.99958 11.1003 9.18372 10.7168 9.02731C10.281 8.84961 9.79735 8.75 9.28571 8.75Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgCreativeCommons;
