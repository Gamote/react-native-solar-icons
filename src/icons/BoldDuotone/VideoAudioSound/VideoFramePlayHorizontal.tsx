import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVideoFramePlayHorizontal = (props: SvgProps) => (
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
      d="M11.25 2C9.88386 2.00133 8.73121 2.01015 7.75004 2.0685V6.24976H11.25V2Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.25004 2.2214C5.02731 2.41566 4.14854 2.78019 3.46451 3.46423C2.78047 4.14826 2.41594 5.02703 2.22168 6.24976H6.25004V2.2214Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.7784 6.24976C21.5841 5.02703 21.2196 4.14826 20.5356 3.46423C19.8515 2.78019 18.9728 2.41566 17.75 2.2214V6.24976H21.7784Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.75 2C14.1162 2.00133 15.2689 2.01015 16.25 2.0685V6.24976H12.75V2Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.7784 17.7498H17.75V21.7781C18.9728 21.5839 19.8515 21.2193 20.5356 20.5353C21.2196 19.8513 21.5841 18.9725 21.7784 17.7498Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16.25 17.7498V21.931C15.2689 21.9894 14.1162 21.9982 12.75 21.9995V17.7498H16.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M11.25 21.9995V17.7498H7.75004L7.75004 21.931C8.73121 21.9894 9.88386 21.9982 11.25 21.9995Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.25004 17.7498L6.25004 21.7781C5.02731 21.5839 4.14854 21.2193 3.46451 20.5353C2.78047 19.8513 2.41594 18.9725 2.22168 17.7498H6.25004Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgVideoFramePlayHorizontal;
