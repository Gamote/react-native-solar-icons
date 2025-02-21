import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgScreencast = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4Z"
      fill={props.primaryColor}
    />
    <Path
      d="M2.75 9.5C2.33579 9.5 2 9.83579 2 10.25C2 10.6642 2.33579 11 2.75 11C7.30635 11 11 14.6937 11 19.25C11 19.6642 11.3358 20 11.75 20C12.1642 20 12.5 19.6642 12.5 19.25C12.5 13.8652 8.13478 9.5 2.75 9.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M2.75 12.5C2.33579 12.5 2 12.8358 2 13.25C2 13.6642 2.33579 14 2.75 14C5.6495 14 8 16.3505 8 19.25C8 19.6642 8.33579 20 8.75 20C9.16421 20 9.5 19.6642 9.5 19.25C9.5 15.5221 6.47792 12.5 2.75 12.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M2.75 15.5C2.33579 15.5 2 15.8358 2 16.25C2 16.6642 2.33579 17 2.75 17C3.99264 17 5 18.0074 5 19.25C5 19.6642 5.33579 20 5.75 20C6.16421 20 6.5 19.6642 6.5 19.25C6.5 17.1789 4.82107 15.5 2.75 15.5Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgScreencast;
