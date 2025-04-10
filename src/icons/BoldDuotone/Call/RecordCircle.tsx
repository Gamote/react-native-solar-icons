import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRecordCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.75 12C12.75 12.6443 12.9375 13.2449 13.2609 13.75H10.7391C11.0625 13.2449 11.25 12.6443 11.25 12C11.25 10.2051 9.79493 8.75 8 8.75C6.20507 8.75 4.75 10.2051 4.75 12C4.75 13.7949 6.20507 15.25 8 15.25H16C17.7949 15.25 19.25 13.7949 19.25 12C19.25 10.2051 17.7949 8.75 16 8.75C14.2051 8.75 12.75 10.2051 12.75 12ZM14.25 12C14.25 11.0335 15.0335 10.25 16 10.25C16.9665 10.25 17.75 11.0335 17.75 12C17.75 12.9665 16.9665 13.75 16 13.75C15.0335 13.75 14.25 12.9665 14.25 12ZM9.75 12C9.75 12.9665 8.9665 13.75 8 13.75C7.0335 13.75 6.25 12.9665 6.25 12C6.25 11.0335 7.0335 10.25 8 10.25C8.9665 10.25 9.75 11.0335 9.75 12Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRecordCircle;
