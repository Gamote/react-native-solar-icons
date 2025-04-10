import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUfo3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18.922 12.1491C20.5253 14.7729 20.9935 17.1486 19.9012 18.241C18.2713 19.8709 13.7841 18.0264 9.8789 14.1212C5.97365 10.2159 4.12913 5.72878 5.75904 4.09887C6.8514 3.00651 9.22714 3.47475 11.851 5.07801"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M11.4848 5.4441C13.3314 3.59741 16.3255 3.59741 18.1722 5.4441L18.5558 5.82769C20.4025 7.67439 20.4025 10.6685 18.5558 12.5152C18.4305 12.6405 18.2697 12.7246 18.0953 12.6933C17.5988 12.6042 16.3769 12.1341 14.1214 9.87854C11.8658 7.62298 11.3958 6.40113 11.3066 5.90468C11.2753 5.73021 11.3594 5.56944 11.4848 5.4441Z"
      stroke="#8E93A6"
      strokeWidth={1.5}
    />
    <Circle
      cx={12}
      cy={12.0002}
      r={1}
      transform="rotate(45 12 12.0002)"
      fill="#8E93A6"
    />
    <Circle
      cx={9.17163}
      cy={7.75748}
      r={1}
      transform="rotate(45 9.17163 7.75748)"
      fill={props.primaryColor}
    />
    <Circle
      cx={16.2427}
      cy={14.8283}
      r={1}
      transform="rotate(45 16.2427 14.8283)"
      fill={props.primaryColor}
    />
    <Path
      d="M3.636 20.364L7.75732 16.2427"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10 22.0005L12.7072 19.7782"
      stroke="#8E93A6"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2 14L4.22192 11.293"
      stroke="#8E93A6"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgUfo3;
