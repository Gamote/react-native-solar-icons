import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSmileSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z"
      fill="black"
    />
    <Path
      d="M9.44661 15.3975C9.11385 15.1508 8.64413 15.2206 8.39747 15.5534C8.15082 15.8862 8.22062 16.3559 8.55339 16.6025C9.5258 17.3233 10.715 17.75 12 17.75C13.285 17.75 14.4742 17.3233 15.4466 16.6025C15.7794 16.3559 15.8492 15.8862 15.6025 15.5534C15.3559 15.2206 14.8862 15.1508 14.5534 15.3975C13.825 15.9373 12.9459 16.25 12 16.25C11.0541 16.25 10.175 15.9373 9.44661 15.3975Z"
      fill="black"
    />
    <Path
      d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
      fill="black"
    />
    <Path
      d="M10 10.5C10 11.3284 9.55228 12 9 12C8.44772 12 8 11.3284 8 10.5C8 9.67157 8.44772 9 9 9C9.55228 9 10 9.67157 10 10.5Z"
      fill="black"
    />
  </Svg>
);
export default SvgSmileSquare;
