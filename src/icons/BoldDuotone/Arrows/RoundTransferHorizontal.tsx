import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundTransferHorizontal = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10.9307 7.56508C11.2428 7.29272 11.275 6.81894 11.0026 6.50686C10.7302 6.19478 10.2565 6.16258 9.94438 6.43494L6.50688 9.43494C6.27134 9.64051 6.18801 9.97063 6.29779 10.2634C6.40756 10.5561 6.6874 10.75 7.00003 10.75H17C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.5858 17.4142 9.25001 17 9.25001H9.00003L10.9307 7.56508Z"
      fill={props.primaryColor}
    />
    <Path
      d="M7.00003 14.75L15 14.75L13.0694 16.4349C12.7573 16.7073 12.7251 17.1811 12.9975 17.4932C13.2698 17.8052 13.7436 17.8374 14.0557 17.5651L17.4932 14.5651C17.7287 14.3595 17.8121 14.0294 17.7023 13.7367C17.5925 13.4439 17.3127 13.25 17 13.25H12L7.00003 13.25C6.58582 13.25 6.25003 13.5858 6.25003 14C6.25003 14.4142 6.58582 14.75 7.00003 14.75Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRoundTransferHorizontal;
