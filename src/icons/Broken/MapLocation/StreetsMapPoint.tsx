import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStreetsMapPoint = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5.5 8.75732C5.5 6.95835 7.067 5.5 9 5.5C10.933 5.5 12.5 6.95835 12.5 8.75732C12.5 10.5422 11.3829 12.625 9.64003 13.3698C9.23374 13.5434 8.76626 13.5434 8.35997 13.3698C6.61708 12.625 5.5 10.5422 5.5 8.75732Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M14.0004 13.9993L20.5004 20.4993M14.0004 13.9993L6.39453 21.6053M14.0004 13.9993L16 11.9998M21.6072 6.39258L19 8.99978"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9Z"
      fill={props.primaryColor}
    />
    <Path
      d="M2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2.49073 4.43821 2.16444 5.80655 2.0551 8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgStreetsMapPoint;
