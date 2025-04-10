import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBoombox = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M6 9.5H18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579C8 3.17157 8 4.11438 8 6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M11 16C11 17.6569 9.65685 19 8 19C6.34315 19 5 17.6569 5 16C5 14.3431 6.34315 13 8 13C9.65685 13 11 14.3431 11 16Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M18.1213 18.1213C16.9497 19.2929 15.0503 19.2929 13.8787 18.1213C12.7071 16.9497 12.7071 15.0502 13.8787 13.8786C15.0503 12.7071 16.9497 12.7071 18.1213 13.8786C19.2929 15.0502 19.2929 16.9497 18.1213 18.1213Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M8 13V15"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.5}
      d="M18.1213 13.8789L16.7071 15.2931"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgBoombox;
