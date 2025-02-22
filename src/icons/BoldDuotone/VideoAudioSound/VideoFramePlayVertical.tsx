import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVideoFramePlayVertical = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z"
      fill={props.primaryColor}
    />
    <Path
      d="M14 12C14 11.4722 13.4704 11.1162 12.4112 10.4043C11.3375 9.68271 10.8006 9.3219 10.4003 9.58682C10 9.85174 10 10.5678 10 12C10 13.4322 10 14.1483 10.4003 14.4132C10.8006 14.6781 11.3375 14.3173 12.4112 13.5957C13.4704 12.8838 14 12.5278 14 12Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.24976 6.25004L2.2214 6.25004C2.41566 5.02731 2.7802 4.14854 3.46423 3.46451C4.14826 2.78047 5.02703 2.41594 6.24976 2.22168V6.25004Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.7781 6.25004C21.5839 5.02731 21.2193 4.14854 20.5353 3.46451C19.8513 2.78047 18.9725 2.41594 17.7498 2.22168V6.25004H21.7781Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.9995 11.25C21.9982 9.88386 21.9894 8.73121 21.931 7.75004H17.7498V11.25H21.9995Z"
      fill={props.primaryColor}
    />
    <Path
      d="M20.5353 20.5356C19.8513 21.2196 18.9725 21.5841 17.7498 21.7784V17.75H21.7781C21.5839 18.9728 21.2193 19.8515 20.5353 20.5356Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.9995 12.75C21.9982 14.1162 21.9894 15.2689 21.931 16.25H17.7498V12.75H21.9995Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.24976 17.75L6.24976 21.7784C5.02703 21.5841 4.14826 21.2196 3.46423 20.5356C2.78019 19.8515 2.41566 18.9728 2.2214 17.75H6.24976Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.24976 16.25H2.0685C2.01015 15.2689 2.00133 14.1162 2 12.75H6.24976V16.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.24976 11.25H2C2.00133 9.88386 2.01015 8.73121 2.0685 7.75004L6.24976 7.75004V11.25Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgVideoFramePlayVertical;
