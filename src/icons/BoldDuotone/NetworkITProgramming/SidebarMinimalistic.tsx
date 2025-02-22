import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSidebarMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.17157 4.1716C2 5.34318 2 7.2288 2 11V13C2 16.7713 2 18.6569 3.17157 19.8285C4.34315 21 6.22876 21 10 21H14C14.0843 21 14.9176 21.0001 15 21.0001L15 3.00006C14.9176 3.00005 14.0843 3.00003 14 3.00003H10C6.22876 3.00003 4.34315 3.00003 3.17157 4.1716Z"
      fill={props.primaryColor}
    />
    <Path
      d="M22 13V11C22 7.22876 22 5.34315 20.8284 4.17157C19.8541 3.19724 17.6359 3.03321 15 3.00559V20.9944C17.6359 20.9668 19.8541 20.8028 20.8284 19.8284C22 18.6569 22 16.7712 22 13Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSidebarMinimalistic;
