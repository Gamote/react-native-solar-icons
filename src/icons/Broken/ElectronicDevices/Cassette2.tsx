import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCassette2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C21.4816 5.82475 21.7706 6.69989 21.8985 8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13.5 13.75C13.5 12.5074 14.5074 11.5 15.75 11.5C16.9926 11.5 18 12.5074 18 13.75C18 14.9926 16.9926 16 15.75 16C14.5074 16 13.5 14.9926 13.5 13.75Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M6 13.75C6 12.5074 7.00736 11.5 8.25 11.5C9.49264 11.5 10.5 12.5074 10.5 13.75C10.5 14.9926 9.49264 16 8.25 16C7.00736 16 6 14.9926 6 13.75Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M8.5 11.5H16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8.5 16H16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13.228 8.5C14.5688 8.5 15.2393 8.5 15.7532 8.14385C16.2671 7.7877 16.5025 7.15997 16.9733 5.90449L17.5 4.5M6.5 4.5L7.02669 5.90449C7.49749 7.15997 7.73289 7.7877 8.24681 8.14385C8.4591 8.29097 8.69809 8.37731 9 8.42799"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgCassette2;
