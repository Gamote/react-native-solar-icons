import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShieldKeyhole = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11.5 16H12.5C13.0523 16 13.5 15.5523 13.5 15V13.5987C14.3967 13.0799 15 12.1104 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.1104 9.6033 13.0799 10.5 13.5987V15C10.5 15.5523 10.9477 16 11.5 16Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Path
      d="M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167C21 10.8996 21 11.4234 21 11.9914C21 14.4963 20.1632 16.4284 19 17.9041M3.19284 14C4.05026 18.2984 7.57641 20.5129 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22C13.0193 22 13.38 21.8424 14.1014 21.5273C14.6796 21.2747 15.3324 20.9478 16 20.5328"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgShieldKeyhole;
