import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUfo = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2.73145 10C3.60699 9.25047 5.00469 8.62664 6.72703 8.21094M2.73145 13.6524C4.35491 15.0423 7.77368 15.9999 11.7285 15.9999C17.253 15.9999 21.7314 14.1313 21.7314 11.8262C21.7314 10.6587 20.5826 9.60321 18.7308 8.84573C18.1323 8.6009 17.4603 8.38721 16.73 8.21094M11.7287 10C8.53794 10 7.34123 9.4684 6.92702 9.18039C6.78146 9.07918 6.72725 8.90601 6.72725 8.72876C6.72725 6.11714 8.84501 4 11.4574 4H12C14.6124 4 16.7302 6.11714 16.7302 8.72876C16.7302 8.90601 16.6757 9.07943 16.5301 9.18061C16.249 9.37597 15.608 9.68323 14.2295 9.86075"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 16V19"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M5.50036 15.5L4.5 17.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18.4996 15.5L19.5 17.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle cx={12} cy={13} r={1} fill={props.primaryColor} />
    <Circle cx={7} cy={12} r={1} fill={props.primaryColor} />
    <Circle cx={17} cy={12} r={1} fill={props.primaryColor} />
  </Svg>
);
export default SvgUfo;
