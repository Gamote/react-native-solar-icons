import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCart5 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3.55508 14.2572C2.83662 10.9043 2.47739 9.22793 3.37794 8.11397C4.27849 7 5.99296 7 9.4219 7H14.578C18.007 7 19.7215 7 20.622 8.11397C21.5226 9.22793 21.1633 10.9043 20.4449 14.2572L20.0163 16.2572C19.5293 18.5297 19.2858 19.666 18.4608 20.333C17.6357 21 16.4736 21 14.1495 21H9.85047C7.52633 21 6.36426 21 5.53919 20.333C4.71412 19.666 4.47063 18.5297 3.98365 16.2572L3.55508 14.2572Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M8 12H16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 15H14"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18 9L15 3"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 9L9 3"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgCart5;
