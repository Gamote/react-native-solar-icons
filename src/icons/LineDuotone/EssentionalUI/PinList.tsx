import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPinList = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13.6315 8.22382L13.2651 7.85744C11.735 6.32736 10.97 5.56232 10.1406 5.56299C9.86971 5.56321 9.60165 5.61847 9.35273 5.72542C8.59071 6.05283 8.19063 7.05807 7.39047 9.06855L7.33256 9.21406C7.10572 9.78403 6.9923 10.069 6.81015 10.2989C6.67197 10.4733 6.50565 10.6235 6.31804 10.7431C6.07076 10.9009 5.77568 10.9846 5.18554 11.1521C4.27042 11.4118 3.81287 11.5417 3.60981 11.8186C3.4589 12.0244 3.3924 12.2802 3.42392 12.5334C3.46633 12.8742 3.80265 13.2105 4.47529 13.8832L7.60579 17.0137C8.27843 17.6863 8.61475 18.0226 8.95553 18.065C9.20879 18.0966 9.46451 18.03 9.67033 17.8791C9.94727 17.6761 10.0771 17.2185 10.3369 16.3034C10.5044 15.7133 10.5881 15.4182 10.7458 15.1709C10.8655 14.9833 11.0156 14.817 11.19 14.6788C11.4199 14.4967 11.7049 14.3832 12.2749 14.1564L12.4204 14.0985C14.4309 13.2983 15.4361 12.8982 15.7635 12.1362C15.8705 11.8873 15.9257 11.6192 15.926 11.3483C15.9266 10.5189 15.1616 9.7539 13.6315 8.22382Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M3.34679 18.142L6.04053 15.4482"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M22 8H17"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M22 12.5H18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M22 17H13"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgPinList;
