import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgForbidden = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18.5 5.5L5.50002 18.4998"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M22 10.8489V13.1511C22 14.3773 22 14.9905 21.7716 15.5418C21.5433 16.0931 21.1097 16.5266 20.2426 17.3937L17.3937 20.2426C16.5266 21.1097 16.0931 21.5433 15.5418 21.7716C14.9905 22 14.3773 22 13.1511 22H10.8489C9.62267 22 9.00954 22 8.45823 21.7716C7.90691 21.5433 7.47337 21.1097 6.60628 20.2426L3.75736 17.3937C2.89027 16.5266 2.45672 16.0931 2.22836 15.5418C2 14.9905 2 14.3773 2 13.1511V10.8489C2 9.62267 2 9.00954 2.22836 8.45823C2.45672 7.90691 2.89027 7.47337 3.75736 6.60628L6.60628 3.75736C7.47337 2.89027 7.90691 2.45672 8.45823 2.22836C9.00954 2 9.62267 2 10.8489 2H13.1511C14.3773 2 14.9905 2 15.5418 2.22836C16.0931 2.45672 16.5266 2.89027 17.3937 3.75736L20.2426 6.60628C21.1097 7.47337 21.5433 7.90691 21.7716 8.45823C22 9.00954 22 9.62267 22 10.8489Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgForbidden;
