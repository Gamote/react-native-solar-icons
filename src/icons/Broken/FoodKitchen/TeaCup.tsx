import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTeaCup = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2.71598 16.1258C2.89681 17.6729 3.72352 19.0714 4.99182 19.9757C5.9263 20.6419 7.04537 21 8.19303 21H11.8069C12.9546 21 14.0736 20.6419 15.0081 19.9757C16.2764 19.0714 17.1031 17.6729 17.284 16.1258L17.6846 12.6978C17.7346 12.2706 17.7595 12.057 17.749 11.8809C17.694 10.9577 17.0132 10.1928 16.1027 10.0309C15.929 10 15.7139 10 15.2838 10H4.71612C4.286 10 4.07094 10 3.89725 10.0309C2.98677 10.1928 2.30599 10.9577 2.2509 11.8809C2.2404 12.057 2.26536 12.2706 2.3153 12.6978"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M17 17H19C20.6569 17 22 15.6569 22 14C22 12.3431 20.6569 11 19 11H17.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M10.0002 2C9.44787 2.55228 9.44787 3.44772 10.0002 4C10.5524 4.55228 10.5524 5.44772 10.0002 6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.99994 7.5L5.11605 7.38388C5.62322 6.87671 5.68028 6.0738 5.24994 5.5C4.81959 4.9262 4.87665 4.12329 5.38382 3.61612L5.49994 3.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.4999 7.5L14.6161 7.38388C15.1232 6.87671 15.1803 6.0738 14.7499 5.5C14.3196 4.9262 14.3767 4.12329 14.8838 3.61612L14.9999 3.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgTeaCup;
