import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRulerAngular = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 6V18.5C2 19.9045 2 20.6067 2.33706 21.1111C2.48298 21.3295 2.67048 21.517 2.88886 21.6629C3.39331 22 4.09554 22 5.5 22C6.90446 22 7.60669 22 8.11114 21.6629C8.32952 21.517 8.51702 21.3295 8.66294 21.1111C9 20.6067 9 19.9045 9 18.5V11C9 10.0572 9 9.58579 9.29289 9.29289C9.58579 9 10.0572 9 11 9H18.5C19.9045 9 20.6067 9 21.1111 8.66294C21.3295 8.51702 21.517 8.32952 21.6629 8.11114C22 7.60669 22 6.90446 22 5.5C22 4.09554 22 3.39331 21.6629 2.88886C21.517 2.67048 21.3295 2.48298 21.1111 2.33706C20.6067 2 19.9045 2 18.5 2H6C4.11438 2 3.17157 2 2.58579 2.58579C2 3.17157 2 4.11438 2 6Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M12 2L12 4M18 2L18 4M9 2L9 5M15 2L15 5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M2 12H4M2 18H4M2 15L5 15M2 9L5 9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgRulerAngular;
