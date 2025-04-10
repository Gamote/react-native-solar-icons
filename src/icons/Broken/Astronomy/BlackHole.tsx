import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBlackHole = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      cx={12}
      cy={12}
      r={2}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M12 10C17 10 16.6 22 9 22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12.3115 14C7.31152 14 7.71152 2 15.3115 2"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10.6313 10.6961C14.1669 7.16053 22.3693 15.9287 16.9953 21.3027"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <Path
      d="M13.6802 13.3039C10.1447 16.8395 1.94222 8.07135 7.31623 2.69734"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <Path
      d="M10.8516 13.5242C7.31605 9.98865 16.0842 1.78622 21.4582 7.16023"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <Path
      d="M13.4599 10.4758C16.9955 14.0113 8.22736 22.2138 2.85334 16.8398"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <Path
      d="M10 12.3115C10 7.31152 22 7.71152 22 15.3115"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14 12C14 17 2 16.6 2 9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBlackHole;
