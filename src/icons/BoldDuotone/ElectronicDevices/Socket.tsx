import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSocket = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.25 7.49982V6.80299V5.29102C7.87504 5.6641 5.25 8.5254 5.25 11.9998C5.25 15.4742 7.87504 18.3355 11.25 18.7086V17.1967V16.4998C11.25 16.0855 11.5858 15.7498 12 15.7498C12.4142 15.7498 12.75 16.0855 12.75 16.4998V17.1967V18.7086C16.125 18.3355 18.75 15.4742 18.75 11.9998C18.75 8.5254 16.125 5.6641 12.75 5.29102V6.80299V7.49982C12.75 7.91403 12.4142 8.24982 12 8.24982C11.5858 8.24982 11.25 7.91403 11.25 7.49982ZM15 11.9998C15 12.5521 14.5523 12.9998 14 12.9998C13.4477 12.9998 13 12.5521 13 11.9998C13 11.4475 13.4477 10.9998 14 10.9998C14.5523 10.9998 15 11.4475 15 11.9998ZM10 12.9998C10.5523 12.9998 11 12.5521 11 11.9998C11 11.4475 10.5523 10.9998 10 10.9998C9.44772 10.9998 9 11.4475 9 11.9998C9 12.5521 9.44772 12.9998 10 12.9998Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSocket;
