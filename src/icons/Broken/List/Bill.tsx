import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBill = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 2H22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8.04897 18.5309C9.93152 20.177 10.8728 21 12 21C13.1272 21 14.0685 20.177 15.951 18.5309L17.951 16.7822C18.9595 15.9004 19.4638 15.4595 19.7319 14.8691C20 14.2787 20 13.6091 20 12.27V9.70249M20 6V2H4V12.27C4 13.6091 4 14.2787 4.2681 14.8691C4.44333 15.255 4.71945 15.577 5.17131 16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8.5 13L15.5 13"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8.5 8L15.5 8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBill;
