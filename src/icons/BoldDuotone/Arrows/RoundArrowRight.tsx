import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundArrowRight = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill={props.primaryColor}
    />
    <Path
      d="M13.5303 8.46967C13.2374 8.17678 12.7626 8.17678 12.4697 8.46967C12.1768 8.76256 12.1768 9.23744 12.4697 9.53033L14.1893 11.25H8C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4142 7.58579 12.75 8 12.75H14.1893L12.4697 14.4697C12.1768 14.7626 12.1768 15.2374 12.4697 15.5303C12.7626 15.8232 13.2374 15.8232 13.5303 15.5303L16.5303 12.5303C16.8232 12.2374 16.8232 11.7626 16.5303 11.4697L13.5303 8.46967Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRoundArrowRight;
