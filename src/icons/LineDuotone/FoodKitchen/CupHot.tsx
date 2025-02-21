import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCupHot = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3.28441 11.2661C3.15113 9.26687 3.08449 8.26726 3.67729 7.63363C4.27009 7 5.27191 7 7.27555 7H12.7245C14.7281 7 15.7299 7 16.3227 7.63363C16.9155 8.26726 16.8489 9.26687 16.7156 11.2661L16.3734 16.3991C16.1964 19.054 16.1079 20.3815 15.2429 21.1907C14.3779 22 13.0475 22 10.3867 22H9.61333C6.95253 22 5.62212 22 4.75712 21.1907C3.89211 20.3815 3.80361 19.054 3.62662 16.3991L3.28441 11.2661Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M17 17H18C20.2091 17 22 15.2091 22 13C22 10.7909 20.2091 9 18 9H17"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M16.5 18H3.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M6.05081 5.0614L6.46143 4.48574C6.6882 4.16781 6.61431 3.72623 6.29638 3.49945C5.97845 3.27267 5.90455 2.8311 6.13133 2.51317L6.54195 1.9375M14.0508 5.0614L14.4614 4.48574C14.6882 4.16781 14.6143 3.72623 14.2964 3.49945C13.9784 3.27267 13.9046 2.8311 14.1313 2.51317L14.5419 1.9375"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M10.0507 5.0614L10.4613 4.48574C10.6881 4.16781 10.6142 3.72623 10.2963 3.49945C9.97837 3.27267 9.90447 2.8311 10.1313 2.51317L10.5419 1.9375"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgCupHot;
