import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBowling = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      cx={12}
      cy={7}
      r={1.5}
      transform="rotate(-90 12 7)"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Circle
      cx={12}
      cy={12}
      r={1.5}
      transform="rotate(-90 12 12)"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M8 8C8.82843 8 9.5 8.67157 9.5 9.5C9.5 10.3284 8.82843 11 8 11C7.17157 11 6.5 10.3284 6.5 9.5C6.5 8.67157 7.17157 8 8 8Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBowling;
