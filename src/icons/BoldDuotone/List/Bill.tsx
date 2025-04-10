import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBill = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.25 3C1.25 2.58579 1.58579 2.25 2 2.25H22C22.4142 2.25 22.75 2.58579 22.75 3C22.75 3.41421 22.4142 3.75 22 3.75H2C1.58579 3.75 1.25 3.41421 1.25 3Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M4 3.75V13.2774C4 14.6175 4 15.2875 4.2681 15.8783C4.5362 16.4692 5.04046 16.9104 6.04896 17.7928L8.04897 19.5429C9.93152 21.1901 10.8728 22.0137 12 22.0137C13.1272 22.0137 14.0685 21.1901 15.951 19.5429L17.951 17.7929C18.9595 16.9104 19.4638 16.4692 19.7319 15.8783C20 15.2875 20 14.6175 20 13.2774V3.75H4Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.75 14C7.75 13.5858 8.08579 13.25 8.5 13.25H15.5C15.9142 13.25 16.25 13.5858 16.25 14C16.25 14.4142 15.9142 14.75 15.5 14.75H8.5C8.08579 14.75 7.75 14.4142 7.75 14Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.75 9C7.75 8.58579 8.08579 8.25 8.5 8.25L15.5 8.25C15.9142 8.25 16.25 8.58579 16.25 9C16.25 9.41421 15.9142 9.75 15.5 9.75H8.5C8.08579 9.75 7.75 9.41421 7.75 9Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgBill;
