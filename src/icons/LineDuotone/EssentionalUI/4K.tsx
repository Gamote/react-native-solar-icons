import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const Svg4K = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M5.5 8V10C5.5 11.1046 6.39543 12 7.5 12H10.5M10.5 8V12M10.5 12V16M13.5 8V13.2M13.5 13.2V16M13.5 13.2L15.4231 11.2M15.4231 11.2L18.5 8M15.4231 11.2L18.5 16"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default Svg4K;
