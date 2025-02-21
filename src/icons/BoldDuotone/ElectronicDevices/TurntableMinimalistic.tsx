import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTurntableMinimalistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12 2c1.7 0 3.094 0 4.25.069l1.5.153c1.223.194 2.102.558 2.785 1.242C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"
      opacity={0.4}
    />
    <Path
      fill="#000"
      d="M12 6.25A5.75 5.75 0 1 0 17.75 12a.75.75 0 0 0-1.5 0 4.25 4.25 0 1 1-2.975-4.056.75.75 0 1 0 .45-1.43A5.8 5.8 0 0 0 12 6.25"
    />
    <Path
      fill="#000"
      d="M10.75 12a.75.75 0 0 0-1.5 0A2.75 2.75 0 0 0 12 14.75a.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25M17.75 7.964V2.221l-1.5-.153v5.896a.25.25 0 0 1-.111.208l-2.555 1.704a.75.75 0 1 0 .832 1.248l2.555-1.703a1.75 1.75 0 0 0 .78-1.457"
    />
  </Svg>
);
export default SvgTurntableMinimalistic;
