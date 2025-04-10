import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarFallMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8.32181 14.4928C7.3798 15.9857 6.90879 16.7322 7.22969 17.3428C7.55059 17.9533 8.45088 18.0236 10.2514 18.1642L10.7173 18.2006C11.2289 18.2405 11.4848 18.2605 11.7084 18.378C11.9321 18.4956 12.0983 18.6974 12.4306 19.101L12.7331 19.4685C13.9026 20.889 14.4873 21.5992 15.1543 21.5079C15.8213 21.4165 16.1289 20.5841 16.7439 18.9194L16.9031 18.4887C17.0778 18.0156 17.1652 17.779 17.3369 17.6074C17.5086 17.4357 17.7451 17.3483 18.2182 17.1735L18.6489 17.0144C20.3137 16.3993 21.1461 16.0918 21.2374 15.4248C21.3288 14.7578 20.6185 14.173 19.1981 13.0036M17.8938 10.5219C17.7532 8.7213 17.6829 7.82102 17.0723 7.50012C16.4618 7.17922 15.7153 7.65022 14.2224 8.59224L13.8361 8.83595C13.4119 9.10364 13.1998 9.23748 12.9554 9.27094C12.7111 9.30439 12.4622 9.23367 11.9644 9.09223L11.5113 8.96345C9.75959 8.46571 8.88375 8.21683 8.41508 8.68551C7.94641 9.15418 8.19528 10.03 8.69303 11.7817"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13.5 6.5L13 6M9.5 2.5L11.5 4.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6.5 6.5L4 4"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6 12L4.5 10.5M2 8L2.5 8.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgStarFallMinimalistic;
