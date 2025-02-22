import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundArrowUp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.9999 12C21.9999 6.47715 17.5227 2 11.9999 2C6.47703 2 1.99988 6.47715 1.99988 12C1.99988 17.5228 6.47703 22 11.9999 22C17.5227 22 21.9999 17.5228 21.9999 12ZM8.46955 11.5303C8.17665 11.2374 8.17665 10.7626 8.46955 10.4697L11.4695 7.46967C11.7624 7.17678 12.2373 7.17678 12.5302 7.46967L15.5302 10.4697C15.8231 10.7626 15.8231 11.2374 15.5302 11.5303C15.2373 11.8232 14.7624 11.8232 14.4695 11.5303L12.7499 9.81066V16C12.7499 16.4142 12.4141 16.75 11.9999 16.75C11.5857 16.75 11.2499 16.4142 11.2499 16V9.81066L9.53021 11.5303C9.23731 11.8232 8.76244 11.8232 8.46955 11.5303Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRoundArrowUp;
