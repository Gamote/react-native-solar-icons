import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHeartShine = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12 2V4"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M12 20V22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M2 12L4 12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M20 12L22 12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6 18L6.34305 17.657"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M17.6567 6.34375L18 6.00049"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18 18L17.657 17.657"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6.34326 6.34375L6 6.00049"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10.7847 15.3538L11.2537 14.7686L10.7847 15.3538ZM12 9.90096L11.4554 10.4166C11.597 10.5662 11.794 10.651 12 10.651C12.206 10.651 12.403 10.5662 12.5446 10.4166L12 9.90096ZM13.2153 15.3538L13.6843 15.9391L13.6843 15.9391L13.2153 15.3538ZM11.2537 14.7686C10.621 14.2616 10.0075 13.8239 9.51582 13.2611C9.04976 12.7276 8.75 12.1383 8.75 11.3796H7.25C7.25 12.5983 7.75413 13.5245 8.38618 14.248C8.99261 14.9422 9.77142 15.5029 10.3157 15.9391L11.2537 14.7686ZM8.75 11.3796C8.75 10.6647 9.14671 10.0958 9.64107 9.86605C10.0847 9.65992 10.7461 9.66744 11.4554 10.4166L12.5446 9.3853C11.454 8.23345 10.1154 7.99162 9.00898 8.50573C7.95333 8.99626 7.25 10.1171 7.25 11.3796H8.75ZM10.3157 15.9391C10.5164 16.0999 10.7605 16.2953 11.0151 16.4465C11.269 16.5974 11.6065 16.75 12 16.75V15.25C11.9935 15.25 11.931 15.2459 11.7811 15.1569C11.6318 15.0682 11.4683 14.9406 11.2537 14.7686L10.3157 15.9391ZM13.6843 15.9391C14.2286 15.5029 15.0074 14.9422 15.6138 14.248C16.2459 13.5245 16.75 12.5983 16.75 11.3796H15.25C15.25 12.1383 14.9502 12.7276 14.4842 13.2611C13.9925 13.8239 13.379 14.2616 12.7463 14.7686L13.6843 15.9391ZM16.75 11.3796C16.75 10.1171 16.0467 8.99626 14.991 8.50573C13.8846 7.99162 12.546 8.23345 11.4554 9.3853L12.5446 10.4166C13.2539 9.66744 13.9153 9.65992 14.3589 9.86605C14.8533 10.0958 15.25 10.6647 15.25 11.3796H16.75ZM12.7463 14.7686C12.5317 14.9406 12.3682 15.0682 12.2189 15.1569C12.069 15.2459 12.0065 15.25 12 15.25V16.75C12.3935 16.75 12.731 16.5974 12.9849 16.4465C13.2395 16.2953 13.4836 16.0999 13.6843 15.9391L12.7463 14.7686Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgHeartShine;
