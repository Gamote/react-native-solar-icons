import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLetterOpened = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 14.0001C22 17.7713 22 19.6569 20.8284 20.8285C19.6569 22.0001 17.7712 22.0001 14 22.0001H10C6.22876 22.0001 4.34315 22.0001 3.17157 20.8285C2 19.6569 2 17.7713 2 14.0001C2 10.2288 2 8.34322 3.17157 7.17164C3.82475 6.51846 4.69989 6.22944 6 6.10156M18 6.10156C19.3001 6.22944 20.1752 6.51846 20.8284 7.17164C21.4816 7.82481 21.7706 8.69993 21.8985 10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10 6H14"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11 9H13"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14 2.00293C15.7066 2.0174 16.6474 2.11214 17.2678 2.73255C18 3.46479 18 4.6433 18 7.00032V9.06357C18 9.52421 18 9.75453 17.9056 9.9561C17.8112 10.1577 17.6342 10.3051 17.2804 10.6L16.5607 11.1997M10 2.00293C8.29344 2.0174 7.35264 2.11214 6.73223 2.73255C6 3.46479 6 4.6433 6 7.00032V9.06357C6 9.52421 6 9.75453 6.09441 9.9561C6.18882 10.1577 6.36576 10.3051 6.71963 10.6L8.1589 11.7994C9.99553 13.3299 10.9139 14.0952 12 14.0952C12.6493 14.0952 13.2386 13.8217 14 13.2748"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgLetterOpened;
