import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgReply2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9.5 17L4.5 12L9.5 7"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.5}
      d="M4.5 12L14.5 12C16.1667 12 19.5 11 19.5 7"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgReply2;
