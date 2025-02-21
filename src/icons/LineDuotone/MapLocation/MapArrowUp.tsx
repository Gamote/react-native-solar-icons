import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapArrowUp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 18.4731C11.7501 18.4731 11.5002 18.5344 11.2706 18.657L5.36689 21.809C3.97914 22.5499 2.49789 20.9984 3.16496 19.5025L10.5275 2.99281C10.8226 2.33094 11.4113 2 12 2"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M12 18.4731C12.2499 18.4731 12.4998 18.5344 12.7294 18.657L18.6331 21.809C20.0209 22.5499 21.5021 20.9984 20.835 19.5025L13.4725 2.99281C13.1774 2.33094 12.5887 2 12 2"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgMapArrowUp;
