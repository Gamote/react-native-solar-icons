import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAirbuds = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 8.3C22 9.95685 20.6569 11.3 19 11.3C18.4477 11.3 18 11.7477 18 12.3V18M13.5 18V18.75C13.5 19.9926 14.5074 21 15.75 21C16.9926 21 18 19.9926 18 18.75V18M13.5 18V8.3125C13.5 8.02234 13.5 7.87726 13.506 7.75466C13.6322 5.18614 15.6861 3.13221 18.2547 3.00602C18.3773 3 18.5223 3 18.8125 3C18.9866 3 19.0736 3 19.1472 3.00361C19.9772 3.04439 20.7177 3.42067 21.2361 4M13.5 18H18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10.5 18V18.75C10.5 19.9926 9.49264 21 8.25 21C7.00736 21 6 19.9926 6 18.75V18M10.5 18H6M10.5 18V14M6 18V12.3C6 11.7477 5.55228 11.3 5 11.3C3.34315 11.3 2 9.95685 2 8.3V6.1875C2 6.0134 2 5.92635 2.00361 5.8528C2.07932 4.31169 3.31169 3.07932 4.8528 3.00361C4.92635 3 5.0134 3 5.1875 3C5.47766 3 5.62274 3 5.74534 3.00602C8.31386 3.13221 10.3678 5.18614 10.494 7.75466C10.5 7.87726 10.5 8.02234 10.5 8.3125V10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M19.5 6V8.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M4.5 6V8.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgAirbuds;
