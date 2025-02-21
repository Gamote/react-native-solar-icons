import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHeartLock = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.49565 20.0367C5.96837 18.1516 3 15.9375 3 12.0992C3 7.86196 7.95014 4.85701 12 8.93062C16.0499 4.85701 21 7.86196 21 12.0992C21 15.9375 18.0316 18.1516 15.5044 20.0367C15.2417 20.2327 14.9838 20.4251 14.7344 20.6154C13.8 21.3285 12.9 22 12 22C11.1 22 10.2 21.3285 9.26556 20.6154C9.01624 20.4251 8.75832 20.2327 8.49565 20.0367Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12 11.25C12.4142 11.25 12.75 11.5858 12.75 12V14.5C12.75 14.9142 12.4142 15.25 12 15.25C11.5858 15.25 11.25 14.9142 11.25 14.5V12C11.25 11.5858 11.5858 11.25 12 11.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M7.75 7C7.75 5.4953 8.19732 4.46095 8.88885 3.79924C9.58601 3.13213 10.6294 2.75 12 2.75C13.3706 2.75 14.414 3.13213 15.1112 3.79924C15.8027 4.46095 16.25 5.4953 16.25 7V7.00134C16.7736 7.01389 17.2781 7.11428 17.75 7.2892V7C17.75 5.19099 17.2036 3.72534 16.1482 2.71548C15.0985 1.71101 13.6418 1.25 12 1.25C10.3582 1.25 8.90153 1.71101 7.85181 2.71548C6.79645 3.72534 6.25 5.19099 6.25 7V7.2892C6.72194 7.11428 7.22639 7.01389 7.75 7.00134V7Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgHeartLock;
