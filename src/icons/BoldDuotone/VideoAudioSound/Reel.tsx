import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgReel = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 17.5228 6.47715 22 12 22H21.25C21.6642 22 22 21.6642 22 21.25C22 20.8358 21.6642 20.5 21.25 20.5H17.2704C20.1097 18.7358 22 15.5887 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16.5 10.5C17.3284 10.5 18 11.1716 18 12C18 12.8284 17.3284 13.5 16.5 13.5C15.6716 13.5 15 12.8284 15 12C15 11.1716 15.6716 10.5 16.5 10.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M9 12C9 11.1716 8.32843 10.5 7.5 10.5C6.67157 10.5 6 11.1716 6 12C6 12.8284 6.67157 13.5 7.5 13.5C8.32843 13.5 9 12.8284 9 12Z"
      fill={props.primaryColor}
    />
    <Path
      d="M13.5 7.5C13.5 8.32843 12.8284 9 12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgReel;
