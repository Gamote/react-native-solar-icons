import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGamepadNoCharge = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16.4042 17.2468C16.5877 17.8312 17.3584 19 18.9733 19C19.5033 19 19.9688 18.8741 20.3658 18.6842C21.6397 18.075 21.9701 16.5145 21.994 15.1026C22.0132 13.9681 21.9863 12.9362 21.9176 12M7.59582 17.2468C7.41231 17.8312 6.64158 19 5.02671 19C4.49667 19 4.03121 18.8741 3.63423 18.6842C2.3603 18.075 2.02992 16.5145 2.00604 15.1026C1.88749 8.09504 3.52645 5.00566 5.90915 4.16059C6.29009 4.02549 6.69838 4 7.10257 4H7.71504C8.59264 4 9.44862 4.27225 10.165 4.77922L10.6669 5.13443C11.0567 5.41029 11.5225 5.55844 12 5.55844C12.4776 5.55844 12.9434 5.41029 13.3332 5.13441L13.8351 4.77922C14.5514 4.27225 15.4074 4 16.2849 4H16.8974C17.3016 4 17.7099 4.02549 18.0908 4.16059C19.4281 4.63486 20.5311 5.81603 21.2206 8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14 17L10 21"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10 17L14 21"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M7.5 9V12M6 10.5L9 10.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M19 10.25C19 10.6642 18.6642 11 18.25 11C17.8358 11 17.5 10.6642 17.5 10.25C17.5 9.83579 17.8358 9.5 18.25 9.5C18.6642 9.5 19 9.83579 19 10.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16 10.25C16 10.6642 15.6642 11 15.25 11C14.8358 11 14.5 10.6642 14.5 10.25C14.5 9.83579 14.8358 9.5 15.25 9.5C15.6642 9.5 16 9.83579 16 10.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16.75 8C17.1642 8 17.5 8.33579 17.5 8.75C17.5 9.16421 17.1642 9.5 16.75 9.5C16.3358 9.5 16 9.16421 16 8.75C16 8.33579 16.3358 8 16.75 8Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16.75 11C17.1642 11 17.5 11.3358 17.5 11.75C17.5 12.1642 17.1642 12.5 16.75 12.5C16.3358 12.5 16 12.1642 16 11.75C16 11.3358 16.3358 11 16.75 11Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgGamepadNoCharge;
