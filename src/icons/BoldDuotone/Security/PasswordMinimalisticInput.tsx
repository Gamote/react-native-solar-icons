import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPasswordMinimalisticInput = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M3.17157 18.8284C4.34315 20 6.22876 20 10 20L15.75 19.9944C18.3859 19.9668 19.8541 19.8028 20.8284 18.8285C22 17.6569 22 15.7713 22 12C22 8.22879 22 6.34317 20.8284 5.1716C19.8541 4.19727 18.3738 4.02762 15.7379 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284Z"
      fill={props.primaryColor}
    />
    <Path
      d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z"
      fill={props.primaryColor}
    />
    <Path
      d="M8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 1.25C15.4142 1.25 15.75 1.58579 15.75 2V4.00559V19.9944V22C15.75 22.4142 15.4142 22.75 15 22.75C14.5858 22.75 14.25 22.4142 14.25 22V2C14.25 1.58579 14.5858 1.25 15 1.25Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgPasswordMinimalisticInput;
