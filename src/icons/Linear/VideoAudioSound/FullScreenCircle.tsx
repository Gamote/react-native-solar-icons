import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFullScreenCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6 9.99739C6.01447 8.29083 6.10921 7.35004 6.72963 6.72963C7.35004 6.10921 8.29083 6.01447 9.99739 6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6 14.0007C6.01447 15.7072 6.10921 16.648 6.72963 17.2684C7.35004 17.8888 8.29083 17.9836 9.99739 17.998"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M17.9976 9.99739C17.9831 8.29083 17.8883 7.35004 17.2679 6.72963C16.6475 6.10921 15.7067 6.01447 14.0002 6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M17.9976 14.0007C17.9831 15.7072 17.8883 16.648 17.2679 17.2684C16.6475 17.8888 15.7067 17.9836 14.0002 17.998"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle
      cx={12}
      cy={12}
      r={10}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgFullScreenCircle;
