import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLadle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 5.68421C2 3.64948 3.64948 2 5.68421 2C7.71894 2 9.36842 3.64948 9.36842 5.68421V15"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M22 14.5V15.6842C22 19.1723 19.1723 22 15.6842 22C12.1961 22 9.36841 19.1723 9.36841 15.6842V14.6316M22 14.5C22 15.8807 19.0539 17 16 17C12.9461 17 9.36841 16.0123 9.36841 14.6316M22 14.5C22 13.1193 19.0539 12 16 12C12.9461 12 9.36841 13.2509 9.36841 14.6316"
      stroke="black"
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgLadle;
