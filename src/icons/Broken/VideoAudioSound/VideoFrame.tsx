import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVideoFrame = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17 2.5L17 21.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M7 2.5L7 21.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2.5 6.25C2.08579 6.25 1.75 6.58579 1.75 7C1.75 7.41421 2.08579 7.75 2.5 7.75L2.5 6.25ZM7 7.75C7.41421 7.75 7.75 7.41421 7.75 7C7.75 6.58579 7.41421 6.25 7 6.25L7 7.75ZM17 6.25C16.5858 6.25 16.25 6.58579 16.25 7C16.25 7.41421 16.5858 7.75 17 7.75L17 6.25ZM2.5 7.75L7 7.75L7 6.25L2.5 6.25L2.5 7.75ZM17 7.75L22 7.75L22 6.25L17 6.25L17 7.75Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.5 17.75C21.9142 17.75 22.25 17.4142 22.25 17C22.25 16.5858 21.9142 16.25 21.5 16.25V17.75ZM17 16.25C16.5858 16.25 16.25 16.5858 16.25 17C16.25 17.4142 16.5858 17.75 17 17.75V16.25ZM7 17.75C7.41421 17.75 7.75 17.4142 7.75 17C7.75 16.5858 7.41421 16.25 7 16.25L7 17.75ZM17 17.75L21.5 17.75V16.25L17 16.25V17.75ZM2 17.75L7 17.75L7 16.25L2 16.25L2 17.75Z"
      fill={props.primaryColor}
    />
    <Path
      d="M2 12H22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.352 4.28094 21.7133 5.37486 21.8731 7M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2.64799 19.7191 2.28672 18.6251 2.12687 17"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgVideoFrame;
