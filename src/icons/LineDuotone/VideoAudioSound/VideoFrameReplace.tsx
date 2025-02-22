import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVideoFrameReplace = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2H11C12.8856 2 13.8284 2 14.4142 2.58579C15 3.17157 15 4.11438 15 6C15 7.88562 15 8.82843 14.4142 9.41421C13.8284 10 12.8856 10 11 10H6C4.11438 10 3.17157 10 2.58579 9.41421C2 8.82843 2 7.88562 2 6Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M10 18C10 16.1144 10 15.1716 10.5858 14.5858C11.1716 14 12.1144 14 14 14H17C18.8856 14 19.8284 14 20.4142 14.5858C21 15.1716 21 16.1144 21 18C21 19.8856 21 20.8284 20.4142 21.4142C19.8284 22 18.8856 22 17 22H14C12.1144 22 11.1716 22 10.5858 21.4142C10 20.8284 10 19.8856 10 18Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M6 2.5V10M11 2.5V10M2.5 6H6M11 6H15"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M13.5 14.5V22M17.5 14.5V22M11 18H13.5M17.5 18H21"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M22 10L21 11L20 10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.5}
      d="M21 11V10C21 9.06812 21 7.60218 20.8478 7.23463C20.6448 6.74458 20.2554 6.35523 19.7654 6.15224C19.3978 6 18.9319 6 18 6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 14L3 13L4 14"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.5}
      d="M3 13V14C3 14.9319 3 16.3978 3.15224 16.7654C3.35523 17.2554 3.74458 17.6448 4.23463 17.8478C4.60218 18 5.06812 18 6 18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgVideoFrameReplace;
