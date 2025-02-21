import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundArrowLeftDown = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM15.5303 8.46967C15.8232 8.76256 15.8232 9.23744 15.5303 9.53033L10.8107 14.25H13.5C13.9142 14.25 14.25 14.5858 14.25 15C14.25 15.4142 13.9142 15.75 13.5 15.75H9C8.58579 15.75 8.25 15.4142 8.25 15V10.5C8.25 10.0858 8.58579 9.75 9 9.75C9.41421 9.75 9.75 10.0858 9.75 10.5V13.1893L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRoundArrowLeftDown;
