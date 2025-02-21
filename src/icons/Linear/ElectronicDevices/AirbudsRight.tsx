import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAirbudsRight = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21 18.6667V19.5C21 19.6393 21 19.7089 20.997 19.7678C20.9366 20.973 19.973 21.9366 18.7678 21.997C18.7089 22 18.6393 22 18.5 22C18.3607 22 18.2911 22 18.2322 21.997C17.027 21.9366 16.0634 20.973 16.003 19.7678C16 19.7089 16 19.6393 16 19.5V18.6667M21 18.6667V7.625L20.9999 7.55936C20.9841 4.49563 18.5044 2.01591 15.4406 2.00007L15.375 2L15.3356 2.00004C13.4974 2.00954 12.0095 3.49738 12 5.33562L12 5.375V8C12 9.65685 13.3431 11 15 11C15.5523 11 16 11.4477 16 12V18.6667M21 18.6667H16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M15 5V8"
      stroke={props.primaryColor}
      strokeWidth={1.67647}
      strokeLinecap="round"
    />
    <Circle
      cx={7.5}
      cy={16.5}
      r={5.5}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M9.00002 5.1001C7.04089 5.49778 5.49772 7.04095 5.10004 9.00008"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6 14V13.25C5.58579 13.25 5.25 13.5858 5.25 14H6ZM5.25 19C5.25 19.4142 5.58579 19.75 6 19.75C6.41421 19.75 6.75 19.4142 6.75 19H5.25ZM6 16.5H5.25V17.25H6V16.5ZM8.35688 19.3859C8.56999 19.7411 9.03069 19.8562 9.38587 19.6431C9.74106 19.43 9.85623 18.9693 9.64312 18.6141L8.35688 19.3859ZM6 14.75H7.5V13.25H6V14.75ZM6.75 16.5V14H5.25V16.5H6.75ZM8.25 15.25C8.25 15.4039 8.04806 15.75 7.5 15.75V17.25C8.6088 17.25 9.75 16.4768 9.75 15.25H8.25ZM7.5 14.75C8.04806 14.75 8.25 15.0961 8.25 15.25H9.75C9.75 14.0232 8.6088 13.25 7.5 13.25V14.75ZM5.25 14V19H6.75V14H5.25ZM7.5 15.75H6V17.25H7.5V15.75ZM6.85688 16.8859L8.35688 19.3859L9.64312 18.6141L8.14312 16.1141L6.85688 16.8859Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgAirbudsRight;
