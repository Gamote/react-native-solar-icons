import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundTransferDiagonal = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      cx={12}
      cy={12}
      r={10}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M6.50006 4L13.8785 12V7.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.3784 19.8779L9.87842 11.9995V16.4995"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgRoundTransferDiagonal;
