import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundArrowRightUp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10.5 8.25C10.0858 8.25 9.75 8.58579 9.75 9C9.75 9.41421 10.0858 9.75 10.5 9.75H13.1893L8.46967 14.4697C8.17678 14.7626 8.17678 15.2374 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L14.25 10.8107V13.5C14.25 13.9142 14.5858 14.25 15 14.25C15.4142 14.25 15.75 13.9142 15.75 13.5V9C15.75 8.58579 15.4142 8.25 15 8.25H10.5Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRoundArrowRightUp;
