import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBath = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 20.5C12.6493 20.5 13.364 20.4831 14.0982 20.4555C14.3558 20.4458 14.4845 20.441 14.7053 20.4186C17.983 20.0867 20.7773 17.1854 20.9859 13.8977C21 13.6762 21 13.4784 21 13.0827C21 13.0059 21 12.9675 20.9979 12.9351C20.9653 12.4339 20.5661 12.0347 20.0649 12.0021C20.0325 12 19.9941 12 19.9173 12M4.08268 12C4.00591 12 3.96752 12 3.93511 12.0021C3.43395 12.0347 3.0347 12.4339 3.00211 12.9351C3 12.9675 3 13.0059 3 13.0827C3 13.4784 3 13.6762 3.01406 13.8977C3.19458 16.742 5.31032 19.2971 8 20.1495"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6 20L5 22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18 20L19 22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2 12H14M22 12H18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2.25 13C2.25 13.4142 2.58579 13.75 3 13.75C3.41421 13.75 3.75 13.4142 3.75 13H2.25ZM7.59973 3.49934L8.29609 3.22079L8.29609 3.22079L7.59973 3.49934ZM7.97885 4.44713L8.30713 5.12148L7.97885 4.44713ZM6.36212 6.19232L7.05701 6.47451L7.05701 6.47451L6.36212 6.19232ZM10.577 4.37783L10.2824 5.06753L10.2824 5.06753L10.577 4.37783ZM6.34559 8.74156L5.6478 9.01651C5.72221 9.20535 5.86997 9.35596 6.05735 9.43396C6.24473 9.51197 6.45572 9.51069 6.64215 9.43044L6.34559 8.74156ZM12.3063 6.17548L12.6029 6.86436C12.975 6.70417 13.1526 6.27744 13.0041 5.90053L12.3063 6.17548ZM3.75 13V4.38516H2.25V13H3.75ZM5.38516 2.75C6.05379 2.75 6.65506 3.15708 6.90338 3.77788L8.29609 3.22079C7.81998 2.0305 6.66715 1.25 5.38516 1.25V2.75ZM3.75 4.38516C3.75 3.48209 4.48209 2.75 5.38516 2.75V1.25C3.65366 1.25 2.25 2.65366 2.25 4.38516H3.75ZM6.90338 3.77788L7.2825 4.72568L8.67521 4.16859L8.29609 3.22079L6.90338 3.77788ZM7.04337 8.46661C6.80167 7.85321 6.78638 7.14092 7.05701 6.47451L5.66723 5.91014C5.24692 6.94515 5.26959 8.05665 5.6478 9.01651L7.04337 8.46661ZM12.0098 5.4866L6.04903 8.05268L6.64215 9.43044L12.6029 6.86436L12.0098 5.4866ZM10.2824 5.06753C10.9039 5.33307 11.367 5.83741 11.6086 6.45043L13.0041 5.90053C12.6258 4.94029 11.887 4.12189 10.8717 3.68813L10.2824 5.06753ZM7.05701 6.47451C7.31118 5.8486 7.76827 5.3838 8.30713 5.12148L7.65058 3.77279C6.78337 4.19496 6.06253 4.93671 5.66723 5.91014L7.05701 6.47451ZM8.30713 5.12148C8.91452 4.82579 9.62506 4.78672 10.2824 5.06753L10.8717 3.68813C9.79386 3.22768 8.62874 3.29661 7.65058 3.77279L8.30713 5.12148Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgBath;
