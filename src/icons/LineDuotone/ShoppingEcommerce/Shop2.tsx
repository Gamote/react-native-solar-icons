import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShop2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 22H2"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M20 22V11"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M4 22V11"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16.5279 2H7.47226C6.26944 2 5.66803 2 5.18473 2.2987C4.70142 2.5974 4.43247 3.13531 3.89455 4.21114L2.49094 7.75929C2.16665 8.57905 1.88291 9.54525 2.42879 10.2375C2.79501 10.7019 3.36269 11 4.00004 11C5.1046 11 6.00004 10.1046 6.00004 9C6.00004 10.1046 6.89547 11 8.00004 11C9.1046 11 10 10.1046 10 9C10 10.1046 10.8955 11 12 11C13.1046 11 14 10.1046 14 9C14 10.1046 14.8955 11 16 11C17.1046 11 18 10.1046 18 9C18 10.1046 18.8955 11 20 11C20.6374 11 21.2051 10.7019 21.5713 10.2375C22.1172 9.54525 21.8335 8.57905 21.5092 7.75929L20.1056 4.21114C19.5677 3.13531 19.2987 2.5974 18.8154 2.2987C18.3321 2 17.7307 2 16.5279 2Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Path
      opacity={0.5}
      d="M9.5 21.5V18.5C9.5 17.5654 9.5 17.0981 9.70096 16.75C9.83261 16.522 10.022 16.3326 10.25 16.201C10.5981 16 11.0654 16 12 16C12.9346 16 13.4019 16 13.75 16.201C13.978 16.3326 14.1674 16.522 14.299 16.75C14.5 17.0981 14.5 17.5654 14.5 18.5V21.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgShop2;
