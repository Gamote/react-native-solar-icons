import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSoundwaveSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V7Z"
      fill={props.primaryColor}
    />
    <Path
      d="M7.75 9C7.75 8.58579 7.41421 8.25 7 8.25C6.58579 8.25 6.25 8.58579 6.25 9V15C6.25 15.4142 6.58579 15.75 7 15.75C7.41421 15.75 7.75 15.4142 7.75 15V9Z"
      fill={props.primaryColor}
    />
    <Path
      d="M17.75 10C17.75 9.58579 17.4142 9.25 17 9.25C16.5858 9.25 16.25 9.58579 16.25 10V14C16.25 14.4142 16.5858 14.75 17 14.75C17.4142 14.75 17.75 14.4142 17.75 14V10Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSoundwaveSquare;
