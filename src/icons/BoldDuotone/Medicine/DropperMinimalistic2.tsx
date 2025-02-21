import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDropperMinimalistic2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M19 15.8831V8C19 6.11438 19 5.17157 18.4142 4.58579C17.8284 4 16.8856 4 15 4H9C7.11438 4 6.17157 4 5.58579 4.58579C5 5.17157 5 6.11438 5 8V15.8831C5 16.6438 5.31911 17.3697 5.87966 17.8841C9.3416 21.0607 14.6584 21.0607 18.1203 17.8841C18.6809 17.3697 19 16.6438 19 15.8831Z"
      fill={props.primaryColor}
    />
    <Path
      d="M18.9983 7.25H17C16.5858 7.25 16.25 7.58579 16.25 8C16.25 8.41421 16.5858 8.75 17 8.75H19V8C19 7.73144 19 7.482 18.9983 7.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M19 10.25H17C16.5858 10.25 16.25 10.5858 16.25 11C16.25 11.4142 16.5858 11.75 17 11.75H19V10.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M19 13.25H17C16.5858 13.25 16.25 13.5858 16.25 14C16.25 14.4142 16.5858 14.75 17 14.75H19V13.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4H14Z"
      fill={props.primaryColor}
    />
    <Path
      d="M11.25 20.2356C11.7491 20.2769 12.2509 20.2769 12.75 20.2356V21.25C12.75 21.6642 12.4142 22 12 22C11.5858 22 11.25 21.6642 11.25 21.25V20.2356Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.25 16C9.25 15.5858 9.58579 15.25 10 15.25H14C14.4142 15.25 14.75 15.5858 14.75 16C14.75 16.4142 14.4142 16.75 14 16.75H10C9.58579 16.75 9.25 16.4142 9.25 16Z"
      fill={props.primaryColor}
    />
    <Path
      d="M14 10.9166C14 12.0672 13.1046 12.9999 12 12.9999C10.8954 12.9999 10 12.0672 10 10.9166C10 10.1967 10.783 9.23582 11.3691 8.61737C11.7161 8.25124 12.2839 8.25124 12.6309 8.61737C13.217 9.23582 14 10.1967 14 10.9166Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgDropperMinimalistic2;
