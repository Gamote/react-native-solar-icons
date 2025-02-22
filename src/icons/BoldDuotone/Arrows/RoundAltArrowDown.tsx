import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundAltArrowDown = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
      fill={props.primaryColor}
    />
    <Path
      d="M15.5303 11.0303C15.8232 10.7374 15.8232 10.2626 15.5303 9.96967C15.2374 9.67678 14.7626 9.67678 14.4697 9.96967L12 12.4393L9.53033 9.96967C9.23744 9.67678 8.76256 9.67678 8.46967 9.96967C8.17678 10.2626 8.17678 10.7374 8.46967 11.0303L11.4697 14.0303C11.7626 14.3232 12.2374 14.3232 12.5303 14.0303L15.5303 11.0303Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRoundAltArrowDown;
