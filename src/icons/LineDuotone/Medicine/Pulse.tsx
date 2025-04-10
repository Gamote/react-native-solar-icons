import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPulse = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5 15H6.39445C7.1804 15 7.57337 15 7.90501 15.1775C8.23665 15.355 8.45463 15.682 8.8906 16.3359L9.05039 16.5756C9.47306 17.2096 9.68439 17.5266 9.97087 17.5096C10.2573 17.4926 10.4297 17.1528 10.7743 16.4732L12.7404 12.5965C13.0987 11.8899 13.2779 11.5366 13.5711 11.5248C13.8642 11.5131 14.0711 11.8509 14.485 12.5265L15.1222 13.567C15.5512 14.2672 15.7656 14.6174 16.1072 14.8087C16.4487 15 16.8593 15 17.6805 15H19"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgPulse;
