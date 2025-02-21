import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextSelection = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M9 9H15" stroke="black" strokeWidth={1.5} strokeLinecap="round" />
    <Path
      d="M12 15L12 9"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18C21.1046 18 22 18.8954 22 20Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path d="M18 4H6" stroke="black" strokeWidth={1.5} strokeLinecap="round" />
    <Path
      d="M20 18L20 12M20 6V8"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18 20L12 20M6 20L8 20"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M4 6L4 18"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgTextSelection;
