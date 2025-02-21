import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTuning4 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 4C12 2.89543 12.8954 2 14 2C15.1046 2 16 2.89543 16 4C16 5.10457 15.1046 6 14 6C12.8954 6 12 5.10457 12 4Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10 18C11.1046 18 12 18.8954 12 20C12 21.1046 11.1046 22 10 22C8.89543 22 8 21.1046 8 20C8 18.8954 8.89543 18 10 18Z"
      fill={props.primaryColor}
    />
    <Path
      d="M15.25 12C15.25 11.5858 15.5858 11.25 16 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H16C15.5858 12.75 15.25 12.4142 15.25 12Z"
      fill={props.primaryColor}
    />
    <Path
      d="M14 19.25C13.5858 19.25 13.25 19.5858 13.25 20C13.25 20.4142 13.5858 20.75 14 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20C19.75 19.5858 19.4142 19.25 19 19.25H14Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10.75 4C10.75 3.58579 10.4142 3.25 10 3.25L5 3.25C4.58579 3.25 4.25 3.58579 4.25 4C4.25 4.41421 4.58579 4.75 5 4.75L10 4.75C10.4142 4.75 10.75 4.41421 10.75 4Z"
      fill={props.primaryColor}
    />
    <Path
      d="M5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75H8C8.41421 12.75 8.75 12.4142 8.75 12C8.75 11.5858 8.41421 11.25 8 11.25H5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M4.25 20C4.25 19.5858 4.58579 19.25 5 19.25H6C6.41421 19.25 6.75 19.5858 6.75 20C6.75 20.4142 6.41421 20.75 6 20.75H5C4.58579 20.75 4.25 20.4142 4.25 20Z"
      fill={props.primaryColor}
    />
    <Path
      d="M19 3.25C19.4142 3.25 19.75 3.58579 19.75 4C19.75 4.41421 19.4142 4.75 19 4.75H18C17.5858 4.75 17.25 4.41421 17.25 4C17.25 3.58579 17.5858 3.25 18 3.25H19Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgTuning4;
