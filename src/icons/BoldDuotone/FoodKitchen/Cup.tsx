import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCup = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.25 21C1.25 20.5858 1.58579 20.25 2 20.25L22 20.25C22.4142 20.25 22.75 20.5858 22.75 21C22.75 21.4142 22.4142 21.75 22 21.75L2 21.75C1.58579 21.75 1.25 21.4142 1.25 21Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.00174 13C3 12.6878 3 12.355 3 12V7C3 5.11438 3 4.17157 3.58579 3.58579C4.17157 3 5.11438 3 7 3H13C14.8856 3 15.8284 3 16.4142 3.58579C16.649 3.82059 16.7897 4.11275 16.874 4.5H18C20.5261 4.5 22.75 6.31185 22.75 8.75C22.75 11.1882 20.5261 13 18 13H3.00174ZM16.9957 6C17 6.30037 17 6.63226 17 7V11.5H18C19.8921 11.5 21.25 10.1778 21.25 8.75C21.25 7.32216 19.8921 6 18 6H16.9957Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M9.00021 18H11.0002C13.8286 18 15.2429 18 16.1215 17.1213C16.8899 16.3529 16.9864 15.175 16.9985 13H3.00195C3.01406 15.175 3.11051 16.3529 3.87889 17.1213C4.75757 18 6.17179 18 9.00021 18Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgCup;
