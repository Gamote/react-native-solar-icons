import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMagnet = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17 2H19.5C20.3284 2 21 2.67157 21 3.5V5.5C21 6.32843 20.3284 7 19.5 7H17M17 2H13C11.5778 2 10.2249 2.2969 9 2.83209M17 2V7M17 7H13C10.2386 7 8 9.23858 8 12C8 13.1258 8.37209 14.1647 9 15.0005M17 17H19.5C20.3284 17 21 17.6716 21 18.5V20.5C21 21.3284 20.3284 22 19.5 22H17M17 17H13M17 17V22M17 22H13C7.47715 22 3 17.5228 3 12C3 9.74835 3.74418 7.67051 5 5.99903"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgMagnet;
