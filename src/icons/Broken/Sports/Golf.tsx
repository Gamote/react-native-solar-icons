import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGolf = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16.9785 21.5361C15.5125 21.8312 13.8126 22 12 22C6.47715 22 2 20.433 2 18.5C2 16.567 6.47715 15 12 15C17.5228 15 22 16.567 22 18.5C22 19.0476 21.6407 19.5659 21 20.0274"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 18V2"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11.9998 3.5L17.4221 6.21114C18.9832 6.99169 19.7638 7.38196 19.7638 8C19.7638 8.61804 18.9832 9.00831 17.4221 9.78886L11.9998 12.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgGolf;
