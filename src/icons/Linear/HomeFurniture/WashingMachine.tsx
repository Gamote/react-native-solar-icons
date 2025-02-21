import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWashingMachine = (props: SvgProps) => (
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
      strokeWidth={1.5}
      d="M6 22v-1M18 22v-1"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v3c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M3 9h18" />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M15 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6.5 5.5h3"
    />
    <Path
      fill="#000"
      d="M15.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M18.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </Svg>
);
export default SvgWashingMachine;
