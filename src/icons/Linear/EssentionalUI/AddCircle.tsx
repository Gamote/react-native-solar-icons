import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAddCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      cx={12}
      cy={12}
      r={10}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgAddCircle;
