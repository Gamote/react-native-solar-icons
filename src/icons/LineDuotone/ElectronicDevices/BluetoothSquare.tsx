import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBluetoothSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M11 11.9999L13.9333 9.79988C14.4222 9.43322 14.6667 9.24988 14.6667 8.99988C14.6667 8.74988 14.4222 8.56655 13.9333 8.19988L12.6 7.19988C11.9019 6.67628 11.5528 6.41447 11.2764 6.55267C11 6.69087 11 7.1272 11 7.99988V11.9999ZM11 11.9999V15.9999C11 16.8726 11 17.3089 11.2764 17.4471C11.5528 17.5853 11.9019 17.3235 12.6 16.7999L13.9333 15.7999C14.4222 15.4332 14.6667 15.2499 14.6667 14.9999C14.6667 14.7499 14.4222 14.5665 13.9333 14.1999L11 11.9999ZM11 11.9999L8 9.49988M11 11.9999L8 14.4999"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBluetoothSquare;
