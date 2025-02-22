import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgThreeSquares = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7.00005 12H6.00005C4.11443 12 3.17162 12 2.58584 12.5858C2.11429 13.0573 2.02233 13.7602 2.00439 15M12 17V18C12 19.8856 12 20.8284 11.4143 21.4142C10.8285 22 9.88567 22 8.00005 22H6.00005C4.11443 22 3.17162 22 2.58584 21.4142C2.11429 20.9427 2.02233 20.2398 2.00439 19"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 7H11C9.11438 7 8.17157 7 7.58579 7.58579C7 8.17157 7 9.11438 7 11V13C7 14.8856 7 15.8284 7.58579 16.4142C8.17157 17 9.11438 17 11 17H13C14.8856 17 15.8284 17 16.4142 16.4142C17 15.8284 17 14.8856 17 13V12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M15 2.00439C13.7602 2.02233 13.0573 2.11429 12.5858 2.58584C12 3.17162 12 4.11443 12 6.00005V8.00005C12 9.88567 12 10.8285 12.5858 11.4143C13.1716 12 14.1144 12 16 12H18C19.8856 12 20.8284 12 21.4142 11.4143C22 10.8285 22 9.88567 22 8.00005V6.00005C22 4.11443 22 3.17162 21.4142 2.58584C20.9427 2.11429 20.2398 2.02233 19 2.00439"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgThreeSquares;
