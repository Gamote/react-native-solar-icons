import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTv = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 16.0001V12.0001C22 9.17169 22 7.75747 21.1213 6.87879C20.296 6.05349 18.9983 6.00336 16.5 6.00031V21.9999C18.9983 21.9969 20.296 21.9467 21.1213 21.1214C22 20.2428 22 18.8285 22 16.0001ZM19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11ZM19 15C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17C18.4477 17 18 16.5523 18 16C18 15.4477 18.4477 15 19 15Z"
      fill="black"
    />
    <Path
      d="M15.5694 3.48811L13.4163 6.00011H15V22.0001L8 22.0001C5.17157 22.0001 3.75736 22.0001 2.87868 21.1214C2 20.2428 2 18.8285 2 16.0001V12.0001C2 9.17169 2 7.75747 2.87868 6.87879C3.75736 6.00011 5.17157 6.00011 8 6.00011H10.5837L8.43054 3.48811C8.16098 3.17361 8.1974 2.70014 8.51189 2.43057C8.82639 2.16101 9.29986 2.19743 9.56943 2.51192L12 5.34757L14.4305 2.51192C14.7001 2.19743 15.1736 2.161 15.4881 2.43057C15.8026 2.70014 15.839 3.17361 15.5694 3.48811Z"
      fill="black"
    />
  </Svg>
);
export default SvgTv;
