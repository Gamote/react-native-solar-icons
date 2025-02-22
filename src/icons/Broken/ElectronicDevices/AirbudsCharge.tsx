import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAirbudsCharge = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18 11.5V11.3C18 10.7477 18.4477 10.3 19 10.3C20.6569 10.3 22 8.95685 22 7.3V5.1875C22 5.0134 22 4.92635 21.9964 4.8528C21.9207 3.31169 20.6883 2.07932 19.1472 2.00361C19.0736 2 18.9866 2 18.8125 2C18.5223 2 18.3773 2 18.2547 2.00602C15.6861 2.13221 13.6322 4.18614 13.506 6.75466C13.5 6.87726 13.5 7.02234 13.5 7.3125V13.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M19.5 5V7.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M4.5 7V9.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18 16.5L17 18H19L18 19.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 19V19.75C10.5 20.9926 9.49264 22 8.25 22C7.00736 22 6 20.9926 6 19.75V19M10.5 19H6M10.5 19V14M6 19V13.3C6 12.7477 5.55228 12.3 5 12.3C3.34315 12.3 2 10.9569 2 9.3V7.1875C2 7.0134 2 6.92635 2.00361 6.8528C2.07932 5.31169 3.31169 4.07932 4.8528 4.00361C4.92635 4 5.0134 4 5.1875 4C5.47766 4 5.62274 4 5.74534 4.00602C8.31386 4.13221 10.3678 6.18614 10.494 8.75466C10.5 8.87726 10.5 9.02234 10.5 9.3125V10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgAirbudsCharge;
