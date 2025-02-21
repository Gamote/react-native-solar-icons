import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCourseUp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22.0001 7L14.6204 14.3347C13.6227 15.3263 13.1239 15.822 12.5052 15.822C11.8864 15.8219 11.3877 15.326 10.3903 14.3342L10.1509 14.0962C9.1526 13.1035 8.65344 12.6071 8.03428 12.6074C7.41512 12.6076 6.91632 13.1043 5.91873 14.0977L2.00006 18M22.0001 7V12.5458M22.0001 7H16.4179"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgCourseUp;
