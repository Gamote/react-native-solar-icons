import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUploadTrack2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13 15V11V7"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle
      cx={11}
      cy={15}
      r={2}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M16 10C14.3431 10 13 8.65685 13 7"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18 22V15M18 15L20.5 17.5M18 15L15.5 17.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 21.8C13.3538 21.9311 12.6849 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7M21.8 14C21.9311 13.3538 22 12.6849 22 12C22 6.47715 17.5228 2 12 2C10.1786 2 8.47087 2.48697 7 3.33782"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgUploadTrack2;
