import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUfo2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2.73145 9C3.60699 8.25047 5.00469 7.62664 6.72703 7.21094M2.73145 12.6524C4.35491 14.0423 7.77368 14.9999 11.7285 14.9999C17.253 14.9999 21.7314 13.1313 21.7314 10.8262C21.7314 9.65873 20.5826 8.60321 18.7308 7.84573C18.1323 7.6009 17.4603 7.38721 16.73 7.21094M11.7287 9C8.53794 9 7.34123 8.4684 6.92702 8.18039C6.78146 8.07918 6.72725 7.90601 6.72725 7.72876C6.72725 5.11714 8.84501 3 11.4574 3H12C14.6124 3 16.7302 5.11714 16.7302 7.72876C16.7302 7.90601 16.6757 8.07943 16.5301 8.18061C16.249 8.37597 15.608 8.68323 14.2295 8.86075"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11.7286 21V18M17.7303 20V17M5.72681 20V17"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12.5 12C12.5 12.5523 12.0523 13 11.5 13C10.9477 13 10.5 12.5523 10.5 12C10.5 11.4477 10.9477 11 11.5 11C12.0523 11 12.5 11.4477 12.5 12Z"
      fill={props.primaryColor}
    />
    <Path
      d="M7.5 11C7.5 11.5523 7.05228 12 6.5 12C5.94772 12 5.5 11.5523 5.5 11C5.5 10.4477 5.94772 10 6.5 10C7.05228 10 7.5 10.4477 7.5 11Z"
      fill={props.primaryColor}
    />
    <Path
      d="M17.5 11C17.5 11.5523 17.0523 12 16.5 12C15.9477 12 15.5 11.5523 15.5 11C15.5 10.4477 15.9477 10 16.5 10C17.0523 10 17.5 10.4477 17.5 11Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgUfo2;
