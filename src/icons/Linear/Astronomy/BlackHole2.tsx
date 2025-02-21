import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBlackHole2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      cx={12}
      cy={12}
      r={2}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M10.1418 10.3628C13.6876 6.81707 21.9137 15.6105 16.5242 21"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <Path
      d="M13.8582 13.6372C10.3124 17.1829 2.08634 8.38952 7.47584 3.00001"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <Path
      d="M10.3627 13.8579C6.81701 10.3122 15.6104 2.08609 20.9999 7.4756"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <Path
      d="M13.6373 10.1421C17.183 13.6878 8.38959 21.9139 3.00008 16.5244"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
  </Svg>
);
export default SvgBlackHole2;
