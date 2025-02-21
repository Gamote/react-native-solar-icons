import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVideoFramePlayVertical = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9998 2C13.7002 2 15.094 2 16.2498 2.06874L16.2498 21.9313C15.094 22 13.7002 22 11.9998 22C10.2993 22 8.90556 22 7.74976 21.9313L7.74977 2.06874C8.90556 2 10.2993 2 11.9998 2ZM12.4112 10.4043C13.4704 11.1162 14 11.4722 14 12C14 12.5278 13.4704 12.8838 12.4112 13.5957C11.3375 14.3173 10.8006 14.6781 10.4003 14.4132C10 14.1483 10 13.4322 10 12C10 10.5678 10 9.85174 10.4003 9.58682C10.8006 9.3219 11.3375 9.68271 12.4112 10.4043Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.24976 6.25L2.2214 6.25C2.41566 5.02727 2.7802 4.1485 3.46423 3.46447C4.14826 2.78043 5.02703 2.4159 6.24976 2.22164V6.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.7781 6.25C21.5839 5.02727 21.2193 4.1485 20.5353 3.46447C19.8513 2.78043 18.9725 2.4159 17.7498 2.22164V6.25H21.7781Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.9995 11.25C21.9982 9.88382 21.9894 8.73117 21.931 7.75H17.7498V11.25H21.9995Z"
      fill={props.primaryColor}
    />
    <Path
      d="M20.5353 20.5355C19.8513 21.2196 18.9725 21.5841 17.7498 21.7784V17.75H21.7781C21.5839 18.9727 21.2193 19.8515 20.5353 20.5355Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.9995 12.75C21.9982 14.1162 21.9894 15.2688 21.931 16.25H17.7498V12.75H21.9995Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.24976 17.75L6.24976 21.7784C5.02703 21.5841 4.14826 21.2196 3.46423 20.5355C2.78019 19.8515 2.41566 18.9727 2.2214 17.75H6.24976Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.24976 16.25H2.0685C2.01015 15.2688 2.00133 14.1162 2 12.75H6.24976V16.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.24976 11.25H2C2.00133 9.88382 2.01015 8.73117 2.0685 7.75L6.24976 7.75V11.25Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgVideoFramePlayVertical;
