import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgThermometer = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17.0955 10L18.396 11.3006M13.896 13.1994L15.1966 14.5M10.6868 16.4087L11.9873 17.7093M13.3034 5L14.1236 4.17981C15.6967 2.60673 18.2471 2.60673 19.8202 4.17981C21.3933 5.75288 21.3933 8.30334 19.8202 9.87642L10.8778 18.8188C10.2289 19.4677 9.32013 19.7865 8.40799 19.6851L7.60886 19.5964C7.00076 19.5288 6.39492 19.7413 5.96229 20.1739L5.57866 20.5576C4.98875 21.1475 4.03233 21.1475 3.44243 20.5576C2.85252 19.9677 2.85252 19.0112 3.44243 18.4213L3.82606 18.0377C4.25869 17.6051 4.47121 16.9992 4.40364 16.3911L4.31485 15.592C4.2135 14.6799 4.53228 13.7711 5.18123 13.1222L10.3034 8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 15L15.5 8.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgThermometer;
