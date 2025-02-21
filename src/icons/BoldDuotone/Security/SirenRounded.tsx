import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSirenRounded = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M4 16V21.25H20V16C20 11.5817 16.4183 8 12 8C7.58172 8 4 11.5817 4 16Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V5C11.25 5.41421 11.5858 5.75 12 5.75C12.4142 5.75 12.75 5.41421 12.75 5V2Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.5303 5.46967C21.8232 5.76256 21.8232 6.23744 21.5303 6.53033L20.0303 8.03033C19.7374 8.32322 19.2626 8.32322 18.9697 8.03033C18.6768 7.73744 18.6768 7.26256 18.9697 6.96967L20.4697 5.46967C20.7626 5.17678 21.2374 5.17678 21.5303 5.46967Z"
      fill={props.primaryColor}
    />
    <Path
      d="M3.53033 5.46967C3.23744 5.17678 2.76256 5.17678 2.46967 5.46967C2.17678 5.76256 2.17678 6.23744 2.46967 6.53033L3.96967 8.03033C4.26256 8.32322 4.73744 8.32322 5.03033 8.03033C5.32322 7.73744 5.32322 7.26256 5.03033 6.96967L3.53033 5.46967Z"
      fill={props.primaryColor}
    />
    <Path
      d="M14.5716 10.8048C14.1877 10.6493 13.7505 10.8346 13.595 11.2185C13.4396 11.6025 13.6249 12.0397 14.0088 12.1952C14.8233 12.5248 15.4746 13.1762 15.8043 13.9906C15.9597 14.3746 16.3969 14.5598 16.7809 14.4044C17.1648 14.249 17.3501 13.8117 17.1947 13.4278C16.7126 12.2368 15.7626 11.2868 14.5716 10.8048Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.75 18.7993C13.1984 18.54 13.5 18.0552 13.5 17.5C13.5 16.6716 12.8284 16 12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.0552 10.8016 18.54 11.25 18.7993V21.25H12.75V18.7993Z"
      fill={props.primaryColor}
    />
    <Path
      d="M4 21.25H2C1.58579 21.25 1.25 21.5858 1.25 22C1.25 22.4142 1.58579 22.75 2 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H20H12.75H11.25H4Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSirenRounded;
