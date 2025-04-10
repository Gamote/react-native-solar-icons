import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSirenRounded = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M20 22V16C20 11.5817 16.4183 8 12 8C7.58172 8 4 11.5817 4 16V22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M14.2905 11.5C15.2932 11.9059 16.0939 12.7065 16.4998 13.7092"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2 22H22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 2V5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M21 6L19.5 7.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M3 6L4.5 7.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13.5 17.5C13.5 18.3284 12.8284 19 12 19C11.1716 19 10.5 18.3284 10.5 17.5C10.5 16.6716 11.1716 16 12 16C12.8284 16 13.5 16.6716 13.5 17.5Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M12 19V22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgSirenRounded;
