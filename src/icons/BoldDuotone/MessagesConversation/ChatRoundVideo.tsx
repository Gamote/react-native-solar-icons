import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChatRoundVideo = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
      fill={props.primaryColor}
    />
    <Path
      d="M13.2196 9.44695C15.0732 10.586 16 11.1555 16 12C16 12.8445 15.0732 13.414 13.2196 14.5531C11.3406 15.7077 10.4011 16.285 9.70056 15.8611C9 15.4372 9 14.2915 9 12C9 9.70853 9 8.56279 9.70056 8.13891C10.4011 7.71504 11.3406 8.29234 13.2196 9.44695Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgChatRoundVideo;
