import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCourseDown = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22.0001 18L14.6204 10.6653C13.6227 9.67375 13.1239 9.17795 12.5052 9.17802C11.8864 9.17809 11.3877 9.674 10.3903 10.6658L10.1509 10.9038C9.1526 11.8965 8.65344 12.3929 8.03428 12.3926C7.41512 12.3924 6.91632 11.8957 5.91873 10.9023L2.00006 7M22.0001 18V12.4542M22.0001 18H16.4179"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgCourseDown;
