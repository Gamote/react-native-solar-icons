import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCondicioner2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8 5C5.17157 5 3.75736 5 2.87868 5.87868C2 6.75736 2 8.17157 2 11C2 14.7712 2 16.6569 3.17157 17.8284C4.34315 19 6.22876 19 10 19H14C17.7712 19 19.6569 19 20.8284 17.8284C22 16.6569 22 14.7712 22 11C22 8.17157 22 6.75736 21.1213 5.87868C20.2426 5 18.8284 5 16 5H12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18 18.5C18 17.0955 18 16.3933 17.6629 15.8889C17.517 15.6705 17.3295 15.483 17.1111 15.3371C16.6067 15 15.9045 15 14.5 15H9.5C8.09554 15 7.39331 15 6.88886 15.3371C6.67048 15.483 6.48298 15.6705 6.33706 15.8889C6 16.3933 6 17.0955 6 18.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6 11.5H8M18 11.5H12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6 9H12M18 9H16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgCondicioner2;
