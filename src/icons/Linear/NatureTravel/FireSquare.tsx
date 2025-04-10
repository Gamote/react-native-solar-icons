import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFireSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M17 12.6666C17 16.9333 13.4444 18 11.6667 18C10.1111 18 7 16.9333 7 12.6666C7 10.8109 8.06292 9.6327 8.95593 9.03969C9.36421 8.76858 9.87201 8.94186 9.89841 9.43125C9.95616 10.502 10.7814 11.3622 11.4205 10.5011C12.0054 9.71293 12.2941 8.64267 12.2941 7.99995C12.2941 7.05317 13.2525 6.45153 14.0008 7.0316C15.4593 8.16225 17 10.0558 17 12.6666Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgFireSquare;
