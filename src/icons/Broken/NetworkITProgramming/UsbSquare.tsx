import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUsbSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      cx={12}
      cy={17}
      r={1}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Circle cx={8} cy={9} r={1} stroke={props.primaryColor} strokeWidth={1.5} />
    <Path
      d="M11.25 16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16H11.25ZM12 6L12.5303 5.46967C12.2374 5.17678 11.7626 5.17678 11.4697 5.46967L12 6ZM12.4697 7.53033C12.7626 7.82322 13.2374 7.82322 13.5303 7.53033C13.8232 7.23744 13.8232 6.76256 13.5303 6.46967L12.4697 7.53033ZM10.4697 6.46967C10.1768 6.76256 10.1768 7.23744 10.4697 7.53033C10.7626 7.82322 11.2374 7.82322 11.5303 7.53033L10.4697 6.46967ZM11.4697 6.53033L12.4697 7.53033L13.5303 6.46967L12.5303 5.46967L11.4697 6.53033ZM11.4697 5.46967L10.4697 6.46967L11.5303 7.53033L12.5303 6.53033L11.4697 5.46967ZM12.75 16V14.125H11.25V16H12.75ZM12.75 14.125V6H11.25V14.125H12.75Z"
      fill={props.primaryColor}
    />
    <Path
      d="M8 10V11.0296C8 11.9044 8.5685 12.6777 9.40345 12.9386L10.8069 13.3772C11.5167 13.599 12 14.2563 12 15"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16 11V12.0296C16 12.9044 15.4315 13.6777 14.5966 13.9386L13.1931 14.3772C12.4833 14.599 12 15.2563 12 16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M15 10C15 9.5286 15 9.29289 15.1464 9.14645C15.2929 9 15.5286 9 16 9C16.4714 9 16.7071 9 16.8536 9.14645C17 9.29289 17 9.5286 17 10C17 10.4714 17 10.7071 16.8536 10.8536C16.7071 11 16.4714 11 16 11C15.5286 11 15.2929 11 15.1464 10.8536C15 10.7071 15 10.4714 15 10Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgUsbSquare;
