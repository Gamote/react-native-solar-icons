import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFireSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16.5582 15C16.835 14.3565 17 13.5858 17 12.6666C17 10.0558 15.4593 8.16225 14.0008 7.0316C13.2525 6.45153 12.2941 7.05317 12.2941 7.99995C12.2941 8.64267 12.0054 9.71293 11.4205 10.5011C10.7814 11.3622 9.95616 10.502 9.89841 9.43125C9.87201 8.94186 9.36421 8.76858 8.95593 9.03969C8.06292 9.6327 7 10.8109 7 12.6666C7 16.9333 10.1111 18 11.6667 18C12.474 18 13.648 17.78 14.6891 17.1402"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgFireSquare;
