import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCosmetic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 12.5C2 12.2239 2.22386 12 2.5 12H7.5C7.77614 12 8 12.2239 8 12.5V18C8 19.6569 6.65685 21 5 21C3.34315 21 2 19.6569 2 18V12.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M3 10.5001H7V5.99995C7 5.25657 6.21769 4.77307 5.55279 5.10552L3.55279 6.10552C3.214 6.27491 3 6.62118 3 6.99995V10.5001Z"
      fill={props.primaryColor}
    />
    <Path
      d="M11 10.5C11 7.46243 13.4624 5 16.5 5C19.5376 5 22 7.46243 22 10.5C22 13.5376 19.5376 16 16.5 16C13.4624 16 11 13.5376 11 10.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M15.75 17.7103C15.9964 17.7365 16.2466 17.75 16.5 17.75C16.7534 17.75 17.0036 17.7365 17.25 17.7103V19.5H19.5C19.9142 19.5 20.25 19.8358 20.25 20.25C20.25 20.6642 19.9142 21 19.5 21H13.5C13.0858 21 12.75 20.6642 12.75 20.25C12.75 19.8358 13.0858 19.5 13.5 19.5H15.75V17.7103Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgCosmetic;
