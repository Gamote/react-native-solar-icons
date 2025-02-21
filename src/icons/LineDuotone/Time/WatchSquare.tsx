import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWatchSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5 12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5C14.8089 5 16.2134 5 17.2223 5.67412C17.659 5.96596 18.034 6.34096 18.3259 6.77772C19 7.78661 19 9.19108 19 12C19 14.8089 19 16.2134 18.3259 17.2223C18.034 17.659 17.659 18.034 17.2223 18.3259C16.2134 19 14.8089 19 12 19C9.19108 19 7.78661 19 6.77772 18.3259C6.34096 18.034 5.96596 17.659 5.67412 17.2223C5 16.2134 5 14.8089 5 12Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M12 9V12.0769L14 14"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.5}
      d="M16.7777 5.5L16.696 5.13228C16.3623 3.63065 16.1955 2.87983 15.6471 2.43992C15.0987 2 14.3295 2 12.7913 2H11.2086C9.67037 2 8.90124 2 8.35283 2.43992C7.80443 2.87983 7.63758 3.63065 7.30388 5.13228L7.22217 5.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M16.7778 18.5L16.6961 18.8677C16.3624 20.3693 16.1956 21.1202 15.6472 21.5601C15.0988 22 14.3296 22 12.7914 22H11.2088C9.67049 22 8.90136 22 8.35296 21.5601C7.80455 21.1202 7.6377 20.3694 7.30401 18.8677L7.22229 18.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgWatchSquare;
