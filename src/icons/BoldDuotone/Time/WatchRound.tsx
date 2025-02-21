import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWatchRound = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12 18.9767C15.866 18.9767 19 15.8531 19 11.9999C19 8.14679 15.866 5.02319 12 5.02319C8.13401 5.02319 5 8.14679 5 11.9999C5 15.8531 8.13401 18.9767 12 18.9767Z"
      fill={props.primaryColor}
    />
    <Path
      d="M11.2088 2H12.7914C14.3297 2 15.0988 2 15.6472 2.43992C16.1956 2.87983 16.3625 3.63065 16.6962 5.13228L17.0001 6.5L17.1564 7.2817C15.877 5.89351 14.0405 5.02344 12.0001 5.02344C9.95971 5.02344 8.12322 5.89351 6.84375 7.2817L7.00009 6.5L7.30403 5.13228C7.63772 3.63065 7.80457 2.87983 8.35298 2.43992C8.90139 2 9.67052 2 11.2088 2Z"
      fill={props.primaryColor}
    />
    <Path
      d="M17.1562 16.7188C15.8768 18.1069 14.0403 18.9769 12 18.9769C9.95967 18.9769 8.12322 18.1069 6.84375 16.7188L7 17.5L7.30394 18.8677C7.63763 20.3693 7.80448 21.1202 8.35289 21.5601C8.90129 22 9.67042 22 11.2087 22H12.7913C14.3296 22 15.0987 22 15.6471 21.5601C16.1955 21.1202 16.3624 20.3693 16.6961 18.8677L17 17.5L17.1562 16.7188Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.6998 9.1381C12.6998 8.75279 12.3864 8.44043 11.9998 8.44043C11.6132 8.44043 11.2998 8.75279 11.2998 9.1381V12.0004C11.2998 12.1901 11.3774 12.3717 11.5146 12.5033L13.3813 14.2922C13.66 14.5592 14.1031 14.5506 14.3711 14.2728C14.639 13.9951 14.6303 13.5534 14.3516 13.2864L12.6998 11.7033V9.1381Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgWatchRound;
