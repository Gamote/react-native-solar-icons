import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWeigher = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C20.4816 3.82475 20.7706 4.69989 20.8985 6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8 18H16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M15.1235 5.52076L15.549 5.59166C16.8084 5.80157 17.5513 7.12177 17.0771 8.30723L16.4115 9.97131C16.1757 10.5607 15.5408 10.8854 14.9249 10.7314C13.0045 10.2513 10.9954 10.2513 9.07499 10.7314C8.45912 10.8854 7.82419 10.5607 7.58842 9.97131L6.92279 8.30723C6.44861 7.12177 7.19154 5.80157 8.45095 5.59166L8.87638 5.52076C9.58042 5.40342 10.2894 5.32602 11 5.28857"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10.1796 9.92905L9.50464 8.04639"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgWeigher;
