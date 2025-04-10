import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlashlightOn = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15 22V17.6569C15 16.8394 15 16.4306 15.1522 16.0631C15.3045 15.6955 15.5935 15.4065 16.1716 14.8284L19.4142 11.5858C19.7032 11.2968 19.8478 11.1522 19.9239 10.9685C20 10.7847 20 10.5803 20 10.1716V10C20 9.05719 20 8.58579 19.7071 8.29289C19.4142 8 18.9428 8 18 8H17M9 22V17.6569C9 16.8394 9 16.4306 8.84776 16.0631C8.69552 15.6955 8.40649 15.4065 7.82843 14.8284L4.58579 11.5858C4.29676 11.2968 4.15224 11.1522 4.07612 10.9685C4 10.7847 4 10.5803 4 10.1716V10C4 9.05719 4 8.58579 4.29289 8.29289C4.58579 8 5.05719 8 6 8H13"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M15 16H9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M4.5 11H19.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 5V2"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8 5L6 3"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16 5L18 3"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 19V21"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgFlashlightOn;
