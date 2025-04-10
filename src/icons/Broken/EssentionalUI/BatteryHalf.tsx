import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBatteryHalf = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7 9C7 9 7.5 9.9 7.5 12C7.5 14.1 7 15 7 15"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10.5 9C10.5 9 11 9.9 11 12C11 14.1 10.5 15 10.5 15"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M20 10C20.9428 10 21.4142 10 21.7071 10.2929C22 10.5858 22 11.0572 22 12C22 12.9428 22 13.4142 21.7071 13.7071C21.4142 14 20.9428 14 20 14V10Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H11.5C15.2712 4 17.1569 4 18.3284 5.17157C19.5 6.34315 19.5 8.22876 19.5 12C19.5 15.7712 19.5 17.6569 18.3284 18.8284C17.1569 20 15.2712 20 11.5 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2.51839 18.1752 2.22937 17.3001 2.10149 16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBatteryHalf;
