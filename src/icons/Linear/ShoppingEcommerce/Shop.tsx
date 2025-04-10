import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShop = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3.5 11V14C3.5 17.7712 3.5 19.6569 4.67157 20.8284C5.84315 22 7.72876 22 11.5 22H12.5C16.2712 22 18.1569 22 19.3284 20.8284C20.5 19.6569 20.5 17.7712 20.5 14V11"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M9.50001 2H14.5L15.1517 8.51737C15.3382 10.382 13.8739 12 12 12C10.1261 12 8.66181 10.382 8.84827 8.51737L9.50001 2Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M3.32972 5.35133C3.5078 4.46093 3.59684 4.01573 3.77788 3.65484C4.15935 2.89439 4.84576 2.33168 5.66625 2.10675C6.05564 2 6.50965 2 7.41768 2H9.49999L8.77546 9.24527C8.61908 10.8091 7.30315 12 5.73152 12C3.80107 12 2.35321 10.2339 2.7318 8.34093L3.32972 5.35133Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M20.6703 5.35133C20.4922 4.46093 20.4031 4.01573 20.2221 3.65484C19.8406 2.89439 19.1542 2.33168 18.3337 2.10675C17.9443 2 17.4903 2 16.5823 2H14.5L15.2245 9.24527C15.3809 10.8091 16.6968 12 18.2685 12C20.1989 12 21.6468 10.2339 21.2682 8.34093L20.6703 5.35133Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M9.5 21.5V18.5C9.5 17.5654 9.5 17.0981 9.70096 16.75C9.83261 16.522 10.022 16.3326 10.25 16.201C10.5981 16 11.0654 16 12 16C12.9346 16 13.4019 16 13.75 16.201C13.978 16.3326 14.1674 16.522 14.299 16.75C14.5 17.0981 14.5 17.5654 14.5 18.5V21.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgShop;
