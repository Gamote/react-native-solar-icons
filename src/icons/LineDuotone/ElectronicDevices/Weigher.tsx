import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWeigher = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M8 18H16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16.4115 9.97127L17.0771 8.3072C17.5513 7.12174 16.8084 5.80153 15.549 5.59163L15.1235 5.52072C13.0554 5.17604 10.9445 5.17604 8.87638 5.52072L8.45095 5.59163C7.19154 5.80153 6.44861 7.12174 6.92279 8.3072L7.58842 9.97127C7.82419 10.5607 8.45912 10.8853 9.07499 10.7314C10.9954 10.2513 13.0045 10.2513 14.9249 10.7314C15.5408 10.8853 16.1757 10.5607 16.4115 9.97127Z"
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
