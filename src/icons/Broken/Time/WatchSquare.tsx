import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWatchSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 8.99998V12.0769L14 14"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.7777 5.5L16.696 5.13228C16.3623 3.63065 16.1955 2.87983 15.6471 2.43992C15.0987 2 14.3295 2 12.7913 2H11.2086C9.67037 2 8.90124 2 8.35283 2.43992C7.80443 2.87983 7.63758 3.63065 7.30388 5.13228L7.22217 5.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M16.7777 5.5L16.696 5.13228C16.3623 3.63065 16.1955 2.87983 15.6471 2.43992C15.0987 2 14.3295 2 12.7913 2H11.2086C9.67037 2 8.90124 2 8.35283 2.43992C7.80443 2.87983 7.63758 3.63065 7.30388 5.13228L7.22217 5.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M16.7777 18.5L16.696 18.8677C16.3623 20.3693 16.1955 21.1202 15.6471 21.5601C15.0987 22 14.3295 22 12.7913 22H11.2086C9.67037 22 8.90124 22 8.35283 21.5601C7.80443 21.1202 7.63758 20.3694 7.30388 18.8677L7.22217 18.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M18.9614 9.2C18.8849 7.66459 18.6565 6.70674 17.9749 6.02513C16.9497 5 15.2998 5 12 5C8.70017 5 7.05025 5 6.02513 6.02513C5 7.05025 5 8.70017 5 12C5 15.2998 5 16.9497 6.02513 17.9749C7.05025 19 8.70017 19 12 19C15.2998 19 16.9497 19 17.9749 17.9749C18.7678 17.1819 18.9474 16.0151 18.9881 14"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgWatchSquare;
