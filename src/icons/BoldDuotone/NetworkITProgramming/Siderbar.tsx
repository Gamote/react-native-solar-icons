import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSiderbar = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.17157 4.1716C2 5.34318 2 7.2288 2 11V13C2 16.7713 2 18.6569 3.17157 19.8285C4.34315 21 6.22876 21 10 21H14C14.0843 21 14.9176 21.0001 15 21.0001L15 3.00006C14.9176 3.00005 14.0843 3.00003 14 3.00003H10C6.22876 3.00003 4.34315 3.00003 3.17157 4.1716Z"
      fill={props.primaryColor}
    />
    <Path
      d="M5.5 9.25C5.08579 9.25 4.75 9.58579 4.75 10C4.75 10.4142 5.08579 10.75 5.5 10.75H11.5C11.9142 10.75 12.25 10.4142 12.25 10C12.25 9.58579 11.9142 9.25 11.5 9.25H5.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.5 13.25C6.08579 13.25 5.75 13.5858 5.75 14C5.75 14.4142 6.08579 14.75 6.5 14.75H10.5C10.9142 14.75 11.25 14.4142 11.25 14C11.25 13.5858 10.9142 13.25 10.5 13.25H6.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M22 13V11C22 7.22876 22 5.34315 20.8284 4.17157C19.8541 3.19724 17.6359 3.03321 15 3.00559V20.9944C17.6359 20.9668 19.8541 20.8028 20.8284 19.8284C22 18.6569 22 16.7712 22 13Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSiderbar;
