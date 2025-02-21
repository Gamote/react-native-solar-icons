import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHeartLock = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17 7C17 3.68629 15.0125 2 12 2C8.98754 2 7 3.68629 7 7"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 12V14.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M9.26556 20.6154L9.72058 20.0192L9.26556 20.6154ZM12 8.93062L11.4681 9.4594C11.6089 9.601 11.8003 9.68062 12 9.68062C12.1997 9.68062 12.3911 9.601 12.5319 9.4594L12 8.93062ZM14.7344 20.6154L15.1895 21.2116L14.7344 20.6154ZM9.72058 20.0192C8.35148 18.9743 6.86905 17.964 5.69244 16.6814C4.54161 15.4268 3.75 13.9756 3.75 12.0992H2.25C2.25 14.46 3.26713 16.2564 4.58706 17.6953C5.88121 19.1062 7.53156 20.2354 8.81054 21.2116L9.72058 20.0192ZM3.75 12.0992C3.75 10.2748 4.81485 8.7347 6.28482 8.08418C7.71357 7.4519 9.63741 7.61795 11.4681 9.4594L12.5319 8.40184C10.3127 6.16968 7.73658 5.8014 5.67779 6.7125C3.66023 7.60535 2.25 9.68634 2.25 12.0992H3.75ZM8.81054 21.2116C9.27099 21.563 9.76987 21.9413 10.2764 22.2279C10.7832 22.5146 11.3656 22.75 12 22.75V21.25C11.7344 21.25 11.4168 21.1496 11.015 20.9223C10.6129 20.6949 10.1946 20.3809 9.72058 20.0192L8.81054 21.2116ZM15.1895 21.2116C16.4684 20.2354 18.1188 19.1062 19.4129 17.6953C20.7329 16.2564 21.75 14.46 21.75 12.0992H20.25C20.25 13.9756 19.4584 15.4268 18.3076 16.6814C17.1309 17.964 15.6485 18.9743 14.2794 20.0192L15.1895 21.2116ZM21.75 12.0992C21.75 9.68634 20.3398 7.60535 18.3222 6.7125C16.2634 5.8014 13.6873 6.16968 11.4681 8.40184L12.5319 9.4594C14.3626 7.61795 16.2864 7.4519 17.7152 8.08418C19.1852 8.7347 20.25 10.2748 20.25 12.0992H21.75ZM14.2794 20.0192C13.8054 20.3809 13.3871 20.6949 12.985 20.9223C12.5832 21.1496 12.2656 21.25 12 21.25V22.75C12.6344 22.75 13.2168 22.5146 13.7236 22.2279C14.2301 21.9413 14.729 21.563 15.1895 21.2116L14.2794 20.0192Z"
      fill="black"
    />
  </Svg>
);
export default SvgHeartLock;
