import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStop = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355L20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M3.46484 20.5359C4.92931 22.0004 7.28633 22.0004 12.0004 22.0004C16.7144 22.0004 19.0714 22.0004 20.5359 20.5359C22.0004 19.0714 22.0004 16.7144 22.0004 12.0004C22.0004 7.28633 22.0004 4.92931 20.5359 3.46484L3.46484 20.5359Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgStop;
