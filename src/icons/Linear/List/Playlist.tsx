import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlaylist = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21 6L3 6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M21 10L3 10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11 14L3 14"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11 18H3"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18.875 14.1185C20.5288 15.0733 21.3558 15.5507 21.4772 16.2396C21.5076 16.4119 21.5076 16.5882 21.4772 16.7605C21.3558 17.4493 20.5288 17.9268 18.875 18.8816C17.2212 19.8365 16.3942 20.3139 15.737 20.0746C15.5725 20.0148 15.4199 19.9266 15.2858 19.8142C14.75 19.3646 14.75 18.4097 14.75 16.5C14.75 14.5904 14.75 13.6355 15.2858 13.1859C15.4199 13.0734 15.5725 12.9853 15.737 12.9254C16.3942 12.6862 17.2212 13.1636 18.875 14.1185Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgPlaylist;
