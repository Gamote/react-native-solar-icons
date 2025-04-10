import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDevices = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22.0001 10C22.0001 6.22876 22.0001 4.34315 20.8285 3.17157C19.657 2 17.7713 2 14.0001 2C10.2289 2 8.34324 2 7.17167 3.17157C6.22859 4.11466 6.04466 5.52043 6.00879 8M22.0001 14C22.0001 17.7712 22.0001 19.6569 20.8285 20.8284C19.657 22 17.7713 22 14.0001 22H12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2 14.5C2 13.0955 2 12.3933 2.33706 11.8889C2.48298 11.6705 2.67048 11.483 2.88886 11.3371C3.39331 11 4.09554 11 5.5 11C6.90446 11 7.60669 11 8.11114 11.3371C8.32952 11.483 8.51702 11.6705 8.66294 11.8889C9 12.3933 9 13.0955 9 14.5V18.5C9 19.9045 9 20.6067 8.66294 21.1111C8.51702 21.3295 8.32952 21.517 8.11114 21.6629C7.60669 22 6.90446 22 5.5 22C4.09554 22 3.39331 22 2.88886 21.6629C2.67048 21.517 2.48298 21.3295 2.33706 21.1111C2 20.6067 2 19.9045 2 18.5V14.5Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M17 19H12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgDevices;
