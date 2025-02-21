import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVideoFrameReplace = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 6C2 7.88562 2 8.82843 2.58579 9.41421C3.17157 10 4.11438 10 6 10H11C12.8856 10 13.8284 10 14.4142 9.41421C15 8.82843 15 7.88562 15 6C15 4.11438 15 3.17157 14.4142 2.58579C13.8284 2 12.8856 2 11 2H6C4.11438 2 3.17157 2 2.58579 2.58579"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M21 18C21 19.8856 21 20.8284 20.4142 21.4142C19.8284 22 18.8856 22 17 22H14C12.1144 22 11.1716 22 10.5858 21.4142C10 20.8284 10 19.8856 10 18C10 16.1144 10 15.1716 10.5858 14.5858C11.1716 14 12.1144 14 14 14H17C18.8856 14 19.8284 14 20.4142 14.5858"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6 2.5V10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13.5 14.5V22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11 2.5V10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M17.5 14.5V22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2 6L6 6M15 6L11 6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11 18H13.5M21 18H17.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M21 11V10C21 9.06812 21 7.60218 20.8478 7.23463C20.6448 6.74458 20.2554 6.35523 19.7654 6.15224C19.3978 6 18.9319 6 18 6M21 11L22 10M21 11L20 10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 13V14C3 14.9319 3 16.3978 3.15224 16.7654C3.35523 17.2554 3.74458 17.6448 4.23463 17.8478C4.60218 18 5.06812 18 6 18M3 13L2 14M3 13L4 14"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgVideoFrameReplace;
