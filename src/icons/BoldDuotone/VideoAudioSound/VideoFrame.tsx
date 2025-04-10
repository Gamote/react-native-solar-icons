import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVideoFrame = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6.25001 2.22168C5.02727 2.41594 4.14851 2.78047 3.46447 3.46451C2.78044 4.14854 2.41591 5.02731 2.22165 6.25004H6.25001V2.22168Z"
      fill={props.primaryColor}
    />
    <Path
      d="M2.06874 7.75004C2.01039 8.73121 2.00158 9.88386 2.00024 11.25H6.25001V7.75004H2.06874Z"
      fill={props.primaryColor}
    />
    <Path
      d="M2.00024 12.75C2.00158 14.1162 2.01039 15.2689 2.06874 16.25H6.25001V12.75H2.00024Z"
      fill={props.primaryColor}
    />
    <Path
      d="M2.22165 17.75C2.41591 18.9728 2.78044 19.8515 3.46447 20.5356C4.14851 21.2196 5.02727 21.5841 6.25001 21.7784V17.75H2.22165Z"
      fill={props.primaryColor}
    />
    <Path
      d="M17.75 21.7784C18.9727 21.5841 19.8515 21.2196 20.5355 20.5356C21.2196 19.8515 21.5841 18.9728 21.7784 17.75H17.75V21.7784Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.9313 16.25C21.9896 15.2689 21.9984 14.1162 21.9998 12.75H17.75V16.25H21.9313Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.9998 11.25C21.9984 9.88386 21.9896 8.73121 21.9313 7.75004H17.75V11.25H21.9998Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.7784 6.25004C21.5841 5.02731 21.2196 4.14854 20.5355 3.46451C19.8515 2.78047 18.9727 2.41594 17.75 2.22168V6.25004H21.7784Z"
      fill={props.primaryColor}
    />
    <G opacity={0.5}>
      <Path
        d="M7.75 21.9313C8.9058 22 10.2996 22 12 22C13.7004 22 15.0942 22 16.25 21.9313V12.75H7.75V21.9313Z"
        fill={props.primaryColor}
      />
      <Path
        d="M16.25 2.06874C15.0942 2 13.7004 2 12 2C10.2996 2 8.9058 2 7.75 2.06874V11.25H16.25V2.06874Z"
        fill={props.primaryColor}
      />
    </G>
  </Svg>
);
export default SvgVideoFrame;
