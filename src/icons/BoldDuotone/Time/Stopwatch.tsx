import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStopwatch = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12 23C16.9706 23 21 18.9706 21 14C21 9.02944 16.9706 5 12 5C7.02944 5 3 9.02944 3 14C3 18.9706 7.02944 23 12 23Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12 9.25C12.4142 9.25 12.75 9.58579 12.75 10V14C12.75 14.4142 12.4142 14.75 12 14.75C11.5858 14.75 11.25 14.4142 11.25 14V10C11.25 9.58579 11.5858 9.25 12 9.25Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.25 2.75C9.25 2.33579 9.58579 2 10 2H14C14.4142 2 14.75 2.33579 14.75 2.75C14.75 3.16421 14.4142 3.5 14 3.5H10C9.58579 3.5 9.25 3.16421 9.25 2.75Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgStopwatch;
