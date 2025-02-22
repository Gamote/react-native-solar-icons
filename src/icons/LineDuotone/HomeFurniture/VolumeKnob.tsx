import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVolumeKnob = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      cx={12}
      cy={12}
      r={5}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M12 7V11"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13 3.5C13 4.05228 12.5523 4.5 12 4.5C11.4477 4.5 11 4.05228 11 3.5C11 2.94772 11.4477 2.5 12 2.5C12.5523 2.5 13 2.94772 13 3.5Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M20.5 13C19.9477 13 19.5 12.5523 19.5 12C19.5 11.4477 19.9477 11 20.5 11C21.0523 11 21.5 11.4477 21.5 12C21.5 12.5523 21.0523 13 20.5 13Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M3.5 13C2.94772 13 2.5 12.5523 2.5 12C2.5 11.4477 2.94772 11 3.5 11C4.05228 11 4.5 11.4477 4.5 12C4.5 12.5523 4.05228 13 3.5 13Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M6.69673 5.28252C7.08726 5.67304 7.08726 6.30621 6.69673 6.69673C6.30621 7.08726 5.67304 7.08726 5.28252 6.69673C4.89199 6.30621 4.89199 5.67304 5.28252 5.28252C5.67304 4.89199 6.30621 4.89199 6.69673 5.28252Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M18.7175 17.3034C19.108 17.6939 19.108 18.3271 18.7175 18.7176C18.327 19.1081 17.6938 19.1081 17.3033 18.7176C16.9127 18.3271 16.9127 17.6939 17.3033 17.3034C17.6938 16.9129 18.327 16.9129 18.7175 17.3034Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M18.7175 6.69673C18.327 7.08726 17.6938 7.08726 17.3033 6.69673C16.9127 6.30621 16.9127 5.67304 17.3033 5.28252C17.6938 4.89199 18.327 4.89199 18.7175 5.28252C19.108 5.67304 19.108 6.30621 18.7175 6.69673Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M6.69673 18.7175C6.30621 19.108 5.67304 19.108 5.28252 18.7175C4.89199 18.327 4.89199 17.6938 5.28252 17.3033C5.67304 16.9127 6.30621 16.9127 6.69673 17.3033C7.08726 17.6938 7.08726 18.327 6.69673 18.7175Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgVolumeKnob;
