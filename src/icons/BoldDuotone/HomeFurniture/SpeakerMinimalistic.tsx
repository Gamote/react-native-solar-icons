import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSpeakerMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10 5.25C9.58579 5.25 9.25 5.58579 9.25 6C9.25 6.41421 9.58579 6.75 10 6.75H14C14.4142 6.75 14.75 6.41421 14.75 6C14.75 5.58579 14.4142 5.25 14 5.25H10Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 9.25C9.37665 9.25 7.25 11.3766 7.25 14C7.25 16.6234 9.37665 18.75 12 18.75C14.6234 18.75 16.75 16.6234 16.75 14C16.75 11.3766 14.6234 9.25 12 9.25Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSpeakerMinimalistic;
