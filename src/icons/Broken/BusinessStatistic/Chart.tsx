import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChart = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 22H2"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M21 22V14.5C21 13.6716 20.3284 13 19.5 13H16.5C15.6716 13 15 13.6716 15 14.5V22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M15 22V9M9 22V5C9 3.58579 9 2.87868 9.43934 2.43934C9.87868 2 10.5858 2 12 2C13.4142 2 14.1213 2 14.5607 2.43934C15 2.87868 15 3.58579 15 5V5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 22V9.5C9 8.67157 8.32843 8 7.5 8H4.5C3.67157 8 3 8.67157 3 9.5V16M3 22V19.75"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgChart;
