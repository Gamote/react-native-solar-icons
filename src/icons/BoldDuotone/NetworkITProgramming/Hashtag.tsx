import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHashtag = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.2007 2.27731C10.5998 2.38817 10.8334 2.80158 10.7226 3.20068L5.72258 21.2007C5.61172 21.5998 5.19832 21.8334 4.79921 21.7226C4.40011 21.6117 4.16645 21.1983 4.27731 20.7992L9.27731 2.79921C9.38817 2.40011 9.80158 2.16645 10.2007 2.27731Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.2007 2.27731C19.5998 2.38817 19.8334 2.80158 19.7226 3.20068L14.7226 21.2007C14.6117 21.5998 14.1983 21.8334 13.7992 21.7226C13.4001 21.6117 13.1664 21.1983 13.2773 20.7992L18.2773 2.79921C18.3882 2.40011 18.8016 2.16645 19.2007 2.27731Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.25 9C3.25 8.58579 3.58579 8.25 4 8.25H22C22.4142 8.25 22.75 8.58579 22.75 9C22.75 9.41421 22.4142 9.75 22 9.75H4C3.58579 9.75 3.25 9.41421 3.25 9Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H20C20.4142 15.25 20.75 15.5858 20.75 16C20.75 16.4142 20.4142 16.75 20 16.75H2C1.58579 16.75 1.25 16.4142 1.25 16Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgHashtag;
