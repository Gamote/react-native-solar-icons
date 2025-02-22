import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDropperMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M19 15.8831V8C19 6.11438 19 5.17157 18.4142 4.58579C17.8284 4 16.8856 4 15 4H9C7.11438 4 6.17157 4 5.58579 4.58579C5 5.17157 5 6.11438 5 8V15.8831C5 16.6438 5.31911 17.3697 5.87966 17.8841C9.3416 21.0607 14.6584 21.0607 18.1203 17.8841C18.6809 17.3697 19 16.6438 19 15.8831Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M19 8L17 8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M19 14H17"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14 11.9167C14 13.0673 13.1046 14 12 14C10.8954 14 10 13.0673 10 11.9167C10 11.1968 10.783 10.2359 11.3691 9.61749C11.7161 9.25136 12.2839 9.25136 12.6309 9.61749C13.217 10.2359 14 11.1968 14 11.9167Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M19 11H17"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 21V22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgDropperMinimalistic;
