import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGamepadNoCharge = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M10.165 4.77922L10.6669 5.13443C11.0567 5.41029 11.5225 5.55844 12 5.55844C12.4776 5.55844 12.9434 5.41029 13.3332 5.13441L13.8351 4.77922C14.5514 4.27225 15.4074 4 16.2849 4H16.8974C17.3016 4 17.7099 4.02549 18.0908 4.16059C20.4735 5.00566 22.1125 8.09503 21.994 15.1026C21.9701 16.5145 21.6397 18.075 20.3658 18.6842C19.9688 18.8741 19.5033 19 18.9733 19C18.3373 19 17.8322 18.8187 17.4424 18.5632C17.0336 18.2953 16.6737 17.9471 16.3139 17.599C15.8693 17.1688 15.4249 16.7389 14.8888 16.4609C14.3048 16.1581 13.6566 16 12.9989 16H11.0011C10.3434 16 9.69519 16.1581 9.11125 16.4609C8.57511 16.7389 8.13071 17.1688 7.68612 17.599C7.32633 17.9471 6.96641 18.2953 6.55763 18.5632C6.1678 18.8187 5.66273 19 5.02671 19C4.49667 19 4.03121 18.8741 3.63423 18.6842C2.3603 18.075 2.02992 16.5145 2.00604 15.1026C1.88749 8.09504 3.52645 5.00566 5.90915 4.16059C6.29009 4.02549 6.69838 4 7.10257 4H7.71504C8.59264 4 9.44862 4.27225 10.165 4.77922Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.4697 17.4697C10.7626 17.1768 11.2374 17.1768 11.5303 17.4697L12 17.9393L12.4697 17.4697C12.7626 17.1768 13.2374 17.1768 13.5303 17.4697C13.8232 17.7626 13.8232 18.2374 13.5303 18.5303L13.0607 19L13.5303 19.4697C13.8232 19.7626 13.8232 20.2374 13.5303 20.5303C13.2374 20.8232 12.7626 20.8232 12.4697 20.5303L12 20.0607L11.5303 20.5303C11.2374 20.8232 10.7626 20.8232 10.4697 20.5303C10.1768 20.2374 10.1768 19.7626 10.4697 19.4697L10.9393 19L10.4697 18.5303C10.1768 18.2374 10.1768 17.7626 10.4697 17.4697Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16.75 8C17.1642 8 17.5 8.33579 17.5 8.75C17.5 9.16421 17.1642 9.5 16.75 9.5C16.3358 9.5 16 9.16421 16 8.75C16 8.33579 16.3358 8 16.75 8Z"
      fill={props.primaryColor}
    />
    <Path
      d="M7.5 8.25C7.91421 8.25 8.25 8.58579 8.25 9V9.75H9C9.41421 9.75 9.75 10.0858 9.75 10.5C9.75 10.9142 9.41421 11.25 9 11.25H8.25V12C8.25 12.4142 7.91421 12.75 7.5 12.75C7.08579 12.75 6.75 12.4142 6.75 12V11.25H6C5.58579 11.25 5.25 10.9142 5.25 10.5C5.25 10.0858 5.58579 9.75 6 9.75H6.75V9C6.75 8.58579 7.08579 8.25 7.5 8.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M19 10.25C19 10.6642 18.6642 11 18.25 11C17.8358 11 17.5 10.6642 17.5 10.25C17.5 9.83579 17.8358 9.5 18.25 9.5C18.6642 9.5 19 9.83579 19 10.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M15.25 11C15.6642 11 16 10.6642 16 10.25C16 9.83579 15.6642 9.5 15.25 9.5C14.8358 9.5 14.5 9.83579 14.5 10.25C14.5 10.6642 14.8358 11 15.25 11Z"
      fill={props.primaryColor}
    />
    <Path
      d="M17.5 11.75C17.5 11.3358 17.1642 11 16.75 11C16.3358 11 16 11.3358 16 11.75C16 12.1642 16.3358 12.5 16.75 12.5C17.1642 12.5 17.5 12.1642 17.5 11.75Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgGamepadNoCharge;
