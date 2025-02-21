import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPill = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.1322 3.46024C11.1852 0.513254 6.40722 0.513254 3.46024 3.46024C0.513254 6.40722 0.513254 11.1852 3.46024 14.1322L9.86778 20.5398C12.8148 23.4867 17.5928 23.4867 20.5398 20.5398C23.4867 17.5928 23.4867 12.8148 20.5398 9.86778L14.1322 3.46024ZM4.5209 4.5209C6.8821 2.1597 10.7104 2.1597 13.0716 4.5209L15.9689 7.41825C15.9653 7.42974 15.9616 7.44148 15.9578 7.45347C15.8679 7.73472 15.7151 8.15053 15.468 8.66312C14.9744 9.68744 14.1032 11.101 12.6019 12.6023C11.1005 14.1037 9.68709 14.9747 8.66292 15.4683C8.1504 15.7153 7.73465 15.868 7.45346 15.9578C7.44149 15.9616 7.42977 15.9654 7.41829 15.9689L4.5209 13.0716C2.1597 10.7104 2.1597 6.8821 4.5209 4.5209ZM8.58965 17.1403L10.9284 19.4791C13.2896 21.8403 17.1179 21.8403 19.4791 19.4791C21.8403 17.1179 21.8403 13.2896 19.4791 10.9284L17.1402 8.58958C17.0521 8.80835 16.9461 9.05118 16.8193 9.31437C16.2594 10.4761 15.2939 12.0316 13.6625 13.663C12.0312 15.2943 10.4757 16.2598 9.31411 16.8195C9.05105 16.9463 8.80833 17.0522 8.58965 17.1403Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgPill;
