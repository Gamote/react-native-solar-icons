import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlarmAdd = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      opacity={0.5}
      cx={12}
      cy={13}
      r={9}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M15 13L12 13M12 13L9 13M12 13L12 10M12 13L12 16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M3.5 4.5L7.50002 2"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.5 4.5L16.5 2"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgAlarmAdd;
