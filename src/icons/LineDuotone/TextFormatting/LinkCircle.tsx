import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLinkCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14 12C14 15.3137 11.3137 18 8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M10 12C10 8.68629 12.6863 6 16 6C19.3137 6 22 8.68629 22 12C22 15.3137 19.3137 18 16 18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgLinkCircle;
