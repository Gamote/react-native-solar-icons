import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShieldNetwork = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17 12C17 12.6566 16.8707 13.3068 16.6194 13.9134C16.3681 14.52 15.9998 15.0712 15.5355 15.5355C15.0712 15.9998 14.52 16.3681 13.9134 16.6194C13.3068 16.8707 12.6566 17 12 17C11.3434 17 10.6932 16.8707 10.0866 16.6194C9.47995 16.3681 8.92876 15.9998 8.46447 15.5355C8.00017 15.0712 7.63188 14.52 7.3806 13.9134C7.12933 13.3068 7 12.6566 7 12C7 11.3434 7.12933 10.6932 7.3806 10.0866C7.63188 9.47995 8.00017 8.92876 8.46447 8.46447C8.92876 8.00017 9.47996 7.63188 10.0866 7.3806C10.6932 7.12933 11.3434 7 12 7C12.6566 7 13.3068 7.12933 13.9134 7.3806C14.52 7.63188 15.0712 8.00017 15.5355 8.46447C15.9998 8.92876 16.3681 9.47996 16.6194 10.0866C16.8707 10.6932 17 11.3434 17 12L17 12Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M13.8478 13.9134C13.9483 13.3068 14 12.6566 14 12C14 11.3434 13.9483 10.6932 13.8478 10.0866C13.7472 9.47996 13.5999 8.92876 13.4142 8.46447C13.2285 8.00017 13.008 7.63188 12.7654 7.3806C12.5227 7.12933 12.2626 7 12 7C11.7374 7 11.4773 7.12933 11.2346 7.3806C10.992 7.63188 10.7715 8.00017 10.5858 8.46447C10.4001 8.92876 10.2528 9.47995 10.1522 10.0866C10.0517 10.6932 10 11.3434 10 12C10 12.6566 10.0517 13.3068 10.1522 13.9134C10.2527 14.52 10.4001 15.0712 10.5858 15.5355C10.7715 15.9998 10.992 16.3681 11.2346 16.6194C11.4773 16.8707 11.7374 17 12 17C12.2626 17 12.5227 16.8707 12.7654 16.6194C13.008 16.3681 13.2285 15.9998 13.4142 15.5355C13.5999 15.0712 13.7472 14.52 13.8478 13.9134Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M7 12H17"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167C21 10.8996 21 11.4234 21 11.9914C21 14.4963 20.1632 16.4284 19 17.9041M3.19284 14C4.05026 18.2984 7.57641 20.5129 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22C13.0193 22 13.38 21.8424 14.1014 21.5273C14.6796 21.2747 15.3324 20.9478 16 20.5328"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgShieldNetwork;
