import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStopwatch = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C16.9706 22 21 17.9706 21 13C21 8.02944 16.9706 4 12 4C7.02944 4 3 8.02944 3 13C3 17.9706 7.02944 22 12 22ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V9C11.25 8.58579 11.5858 8.25 12 8.25Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.25 2C9.25 1.58579 9.58579 1.25 10 1.25H14C14.4142 1.25 14.75 1.58579 14.75 2C14.75 2.41421 14.4142 2.75 14 2.75H10C9.58579 2.75 9.25 2.41421 9.25 2Z"
      fill="black"
    />
  </Svg>
);
export default SvgStopwatch;
