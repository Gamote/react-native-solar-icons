import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCode2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16 11L17.6965 12.5268C19.239 13.9151 20.0103 14.6093 20.0103 15.5C20.0103 16.3907 19.239 17.0849 17.6965 18.4732L16 20"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13.9868 5L11.9934 12.5L10 20"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M7.99999 4.82959L6.30352 6.35641C4.76096 7.74471 3.98969 8.43886 3.98969 9.32959C3.98969 10.2203 4.76096 10.9145 6.30352 12.3028L7.99999 13.8296"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgCode2;
