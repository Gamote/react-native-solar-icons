import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUfo3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18.9219 12.1491C20.5252 14.7729 20.9934 17.1486 19.9011 18.241C18.2711 19.8709 13.784 18.0264 9.87877 14.1212C5.97353 10.2159 4.12901 5.72878 5.75892 4.09887C6.85128 3.00651 9.22702 3.47475 11.8508 5.07801"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M11.4847 5.4441C13.3314 3.59741 16.3255 3.59741 18.1722 5.4441L18.5558 5.82769C20.4025 7.67439 20.4025 10.6685 18.5558 12.5152C18.4304 12.6405 18.2697 12.7246 18.0952 12.6933C17.5987 12.6042 16.3769 12.1341 14.1213 9.87854C11.8658 7.62298 11.3957 6.40113 11.3066 5.90468C11.2752 5.73021 11.3594 5.56944 11.4847 5.4441Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Circle
      cx={12}
      cy={12.0002}
      r={1}
      transform="rotate(45 12 12.0002)"
      fill={props.primaryColor}
    />
    <Circle
      cx={9.17157}
      cy={7.75748}
      r={1}
      transform="rotate(45 9.17157 7.75748)"
      fill={props.primaryColor}
    />
    <Circle
      cx={16.2426}
      cy={14.8283}
      r={1}
      transform="rotate(45 16.2426 14.8283)"
      fill={props.primaryColor}
    />
    <Path
      d="M3.63606 20.364L7.75739 16.2427"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M9.99982 21.9995L12.7071 19.7781"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2.00012 14L4.2218 11.293"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgUfo3;
