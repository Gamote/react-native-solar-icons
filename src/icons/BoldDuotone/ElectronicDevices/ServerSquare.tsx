import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgServerSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G opacity={0.5}>
      <Path
        d="M14 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V12.75H22V13C22 16.7712 22 18.6569 20.8284 19.8284C19.6569 21 17.7712 21 14 21Z"
        fill={props.primaryColor}
      />
      <Path
        d="M10 3H14C17.7712 3 19.6569 3 20.8284 4.17157C22 5.34315 22 7.22876 22 11V11.25H2V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3Z"
        fill={props.primaryColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 12.75H2V11.25H22V12.75Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.75 16.5C12.75 16.0858 13.0858 15.75 13.5 15.75H18C18.4142 15.75 18.75 16.0858 18.75 16.5C18.75 16.9142 18.4142 17.25 18 17.25H13.5C13.0858 17.25 12.75 16.9142 12.75 16.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.75 7.5C12.75 7.08579 13.0858 6.75 13.5 6.75H18C18.4142 6.75 18.75 7.08579 18.75 7.5C18.75 7.91421 18.4142 8.25 18 8.25H13.5C13.0858 8.25 12.75 7.91421 12.75 7.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6 18.25C5.58579 18.25 5.25 17.9142 5.25 17.5V15.5C5.25 15.0858 5.58579 14.75 6 14.75C6.41421 14.75 6.75 15.0858 6.75 15.5V17.5C6.75 17.9142 6.41421 18.25 6 18.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6 9.25C5.58579 9.25 5.25 8.91421 5.25 8.5V6.5C5.25 6.08579 5.58579 5.75 6 5.75C6.41421 5.75 6.75 6.08579 6.75 6.5V8.5C6.75 8.91421 6.41421 9.25 6 9.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M9 18.25C8.58579 18.25 8.25 17.9142 8.25 17.5V15.5C8.25 15.0858 8.58579 14.75 9 14.75C9.41421 14.75 9.75 15.0858 9.75 15.5V17.5C9.75 17.9142 9.41421 18.25 9 18.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M9 9.25C8.58579 9.25 8.25 8.91421 8.25 8.5V6.5C8.25 6.08579 8.58579 5.75 9 5.75C9.41421 5.75 9.75 6.08579 9.75 6.5V8.5C9.75 8.91421 9.41421 9.25 9 9.25Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgServerSquare;
