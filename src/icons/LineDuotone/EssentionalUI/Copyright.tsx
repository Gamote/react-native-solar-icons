import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCopyright = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M14 15.6672C13.475 15.8812 12.8952 16 12.2857 16C9.91878 16 8 14.2091 8 12C8 9.79086 9.91878 8 12.2857 8C12.8952 8 13.475 8.11876 14 8.33283"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgCopyright;
