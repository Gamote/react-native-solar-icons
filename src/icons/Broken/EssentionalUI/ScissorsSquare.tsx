import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgScissorsSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14.5008 17.1L8 6M18 16.2C18 17.1941 17.1605 18 16.125 18C15.0895 18 14.25 17.1941 14.25 16.2C14.25 15.2059 15.0895 14.4 16.125 14.4C17.1605 14.4 18 15.2059 18 16.2Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M9.49916 17.1L16 6M6 16.2C6 17.1941 6.83947 18 7.875 18C8.91053 18 9.75 17.1941 9.75 16.2C9.75 15.2059 8.91053 14.4 7.875 14.4C6.83947 14.4 6 15.2059 6 16.2Z"
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
export default SvgScissorsSquare;
