import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMicrophone2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V8Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M13.5 8L17 8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13.5 11L17 11"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M7 8L9 8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M7 11L9 11"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 19V22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M20.75 10C20.75 9.58579 20.4142 9.25 20 9.25C19.5858 9.25 19.25 9.58579 19.25 10H20.75ZM4.75 10C4.75 9.58579 4.41421 9.25 4 9.25C3.58579 9.25 3.25 9.58579 3.25 10H4.75ZM15.5121 17.3442C15.1499 17.5452 15.0192 18.0017 15.2202 18.3639C15.4212 18.7261 15.8777 18.8568 16.2399 18.6558L15.5121 17.3442ZM19.25 10V11H20.75V10H19.25ZM4.75 11V10H3.25V11H4.75ZM12 18.25C7.99594 18.25 4.75 15.0041 4.75 11H3.25C3.25 15.8325 7.16751 19.75 12 19.75V18.25ZM19.25 11C19.25 13.7287 17.7429 16.1063 15.5121 17.3442L16.2399 18.6558C18.928 17.1642 20.75 14.2954 20.75 11H19.25Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMicrophone2;
