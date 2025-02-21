import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCropMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 19H13C9.22876 19 7.34315 19 6.17157 17.8284C5.51839 17.1752 5.22937 16.3001 5.10149 15M5 11V2"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8 5H11C14.7712 5 16.6569 5 17.8284 6.17157C18.4816 6.82475 18.7706 7.69989 18.8985 9M2 5H5M19 19V22M19 13V16"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgCropMinimalistic;
