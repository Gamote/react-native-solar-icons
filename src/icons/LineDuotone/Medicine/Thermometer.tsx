import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgThermometer = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.096 10 1.3 1.3m-4.5 1.9 1.3 1.3m-4.51 1.909 1.301 1.3M5.58 20.558l.383-.384a2.01 2.01 0 0 1 1.647-.578l.799.09a3.02 3.02 0 0 0 2.47-.867l8.942-8.943a4.028 4.028 0 1 0-5.696-5.696L5.18 13.122a3.02 3.02 0 0 0-.866 2.47l.089.8a2.01 2.01 0 0 1-.578 1.646l-.384.383a1.51 1.51 0 0 0 2.137 2.137"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m9 15 6.5-6.5"
      opacity={0.5}
    />
  </Svg>
);
export default SvgThermometer;
