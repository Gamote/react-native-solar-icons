import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSmartphoneVibration = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V8Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M14.5 19H9.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M22 6L21.2236 7.55279C21.0829 7.83431 21.0829 8.16569 21.2236 8.44721L21.7764 9.55279C21.9172 9.83431 21.9172 10.1657 21.7764 10.4472L21.2236 11.5528C21.0829 11.8343 21.0829 12.1657 21.2236 12.4472L21.7764 13.5528C21.9172 13.8343 21.9172 14.1657 21.7764 14.4472L21.2236 15.5528C21.0829 15.8343 21.0829 16.1657 21.2236 16.4472L22 18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 6L2.77639 7.55279C2.91716 7.83431 2.91716 8.16569 2.77639 8.44721L2.22361 9.55279C2.08284 9.83431 2.08284 10.1657 2.22361 10.4472L2.77639 11.5528C2.91716 11.8343 2.91716 12.1657 2.77639 12.4472L2.22361 13.5528C2.08284 13.8343 2.08284 14.1657 2.22361 14.4472L2.77639 15.5528C2.91716 15.8343 2.91716 16.1657 2.77639 16.4472L2 18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgSmartphoneVibration;
