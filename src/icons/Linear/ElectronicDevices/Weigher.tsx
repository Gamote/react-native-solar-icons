import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWeigher = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
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
      d="M16.4116 9.97127L17.0772 8.3072C17.5514 7.12174 16.8084 5.80153 15.549 5.59163L15.1236 5.52072C13.0555 5.17604 10.9446 5.17604 8.87644 5.52072L8.45101 5.59163C7.1916 5.80153 6.44867 7.12174 6.92285 8.3072L7.58848 9.97127C7.82425 10.5607 8.45918 10.8853 9.07505 10.7314C10.9955 10.2513 13.0046 10.2513 14.925 10.7314C15.5409 10.8853 16.1758 10.5607 16.4116 9.97127Z"
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
