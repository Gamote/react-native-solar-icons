import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSpeakerMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20 12V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C19.7715 4.11466 19.9554 5.52043 19.9913 8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16 14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14C8 11.7909 9.79086 10 12 10C14.2091 10 16 11.7909 16 14Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M10 6H14"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgSpeakerMinimalistic;
