import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMonitor = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V11C22 11.5516 22 12.5494 21.9935 13H2.00652C2 12.5494 2 11.5516 2 11V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2Z"
      fill={props.primaryColor}
    />
    <Path
      d="M7.9846 17.5C5.14528 17.5 3.72562 17.5 2.84356 16.6213C2.27207 16.052 2.07085 15.2579 2 14V13H22V14C21.9292 15.2579 21.7279 16.052 21.1564 16.6213C20.2744 17.5 18.8547 17.5 16.0154 17.5H12.7529V21.5H16.0154C16.4312 21.5 16.7683 21.8358 16.7683 22.25C16.7683 22.6642 16.4312 23 16.0154 23H7.9846C7.56879 23 7.23171 22.6642 7.23171 22.25C7.23171 21.8358 7.56879 21.5 7.9846 21.5H11.2471V17.5H7.9846Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMonitor;
