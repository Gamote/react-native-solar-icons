import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSocket = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6.58447 9.41299C6.87047 8.81431 7.2614 8.25323 7.75727 7.75736C10.1004 5.41421 13.8994 5.41421 16.2426 7.75736C18.5857 10.1005 18.5857 13.8995 16.2426 16.2426C13.8994 18.5858 10.1004 18.5858 7.75727 16.2426C7.2614 15.7468 6.87047 15.1857 6.58447 14.587"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 18.0001V16.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 7.5V6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle cx={14} cy={12} r={1} fill={props.primaryColor} />
    <Circle cx={10} cy={12} r={1} fill={props.primaryColor} />
  </Svg>
);
export default SvgSocket;
