import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundArrowLeftDown = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
      fill={props.primaryColor}
    />
    <Path
      d="M13.5 15.75C13.9142 15.75 14.25 15.4142 14.25 15C14.25 14.5858 13.9142 14.25 13.5 14.25H10.8107L15.5303 9.53033C15.8232 9.23744 15.8232 8.76256 15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L9.75 13.1893V10.5C9.75 10.0858 9.41421 9.75 9 9.75C8.58579 9.75 8.25 10.0858 8.25 10.5V15C8.25 15.4142 8.58579 15.75 9 15.75H13.5Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRoundArrowLeftDown;
