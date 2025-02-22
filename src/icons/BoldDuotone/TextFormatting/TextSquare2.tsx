import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextSquare2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7.75 7C7.33579 7 7 7.33579 7 7.75C7 8.16421 7.33579 8.5 7.75 8.5H11V15.75C11 16.1642 11.3358 16.5 11.75 16.5C12.1642 16.5 12.5 16.1642 12.5 15.75V8.5H15.75C16.1642 8.5 16.5 8.16421 16.5 7.75C16.5 7.33579 16.1642 7 15.75 7H7.75Z"
      fill={props.primaryColor}
    />
    <Path
      d="M20 11.75C20 11.3358 20.3358 11 20.75 11L23.25 11C23.6642 11 24 11.3358 24 11.75C24 12.1642 23.6642 12.5 23.25 12.5H20.75C20.3358 12.5 20 12.1642 20 11.75Z"
      fill={props.primaryColor}
    />
    <Path
      d="M0.75 11C0.335786 11 0 11.3358 0 11.75C0 12.1642 0.335786 12.5 0.75 12.5H3.25C3.66421 12.5 4 12.1642 4 11.75C4 11.3358 3.66421 11 3.25 11H0.75Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgTextSquare2;
