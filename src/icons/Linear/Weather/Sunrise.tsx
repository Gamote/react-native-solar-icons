import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSunrise = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8 22H16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5 19H19"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 16H22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 6C8.68629 6 6 8.68629 6 12C6 13.5217 6.56645 14.911 7.5 15.9687H16.5C17.4335 14.911 18 13.5217 18 12C18 8.68629 15.3137 6 12 6Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M12 10L12.5303 9.46967C12.2374 9.17678 11.7626 9.17678 11.4697 9.46967L12 10ZM13.4697 12.5303C13.7626 12.8232 14.2374 12.8232 14.5303 12.5303C14.8232 12.2374 14.8232 11.7626 14.5303 11.4697L13.4697 12.5303ZM9.46967 11.4697C9.17678 11.7626 9.17678 12.2374 9.46967 12.5303C9.76256 12.8232 10.2374 12.8232 10.5303 12.5303L9.46967 11.4697ZM12.75 16V10H11.25V16H12.75ZM11.4697 10.5303L13.4697 12.5303L14.5303 11.4697L12.5303 9.46967L11.4697 10.5303ZM11.4697 9.46967L9.46967 11.4697L10.5303 12.5303L12.5303 10.5303L11.4697 9.46967Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12 2V3"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M22 12L21 12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M3 12L2 12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M19.0708 4.9292L18.678 5.32204"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M5.32178 5.32178L4.92894 4.92894"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgSunrise;
