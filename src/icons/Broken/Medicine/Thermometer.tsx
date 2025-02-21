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
      d="m17.096 10 1.3 1.3m-4.5 1.9 1.3 1.3m-4.51 1.909 1.301 1.3M13.303 5l.82-.82a4.028 4.028 0 1 1 5.697 5.696l-8.942 8.943a3.02 3.02 0 0 1-2.47.866l-.8-.089a2.01 2.01 0 0 0-1.646.578l-.383.384a1.51 1.51 0 1 1-2.137-2.137l.384-.383a2.01 2.01 0 0 0 .578-1.647l-.09-.799a3.02 3.02 0 0 1 .867-2.47L10.303 8"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m9 15 6.5-6.5"
    />
  </Svg>
);
export default SvgThermometer;
