import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBedsideTable = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M2 10c0-.442.002-1.608.004-2H22c.002.392 0 1.558 0 2v2c0 .442 0 1.608-.002 2H2.002C2 13.608 2 12.442 2 12z"
      clipRule="evenodd"
      opacity={0.5}
    />
    <Path fill="#000" d="M13 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M2.026 7.25c.066-2.021.302-3.235 1.146-4.078C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.829 1.172.843.843 1.08 2.057 1.145 4.078L22 8H2zM12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M2.026 14.75c.066 2.021.302 3.235 1.146 4.078a3.1 3.1 0 0 0 1.078.697V22a.75.75 0 0 0 1.5 0v-2.129C6.82 20 8.194 20 10 20h4c1.806 0 3.18 0 4.25-.129V22a.75.75 0 1 0 1.5 0v-2.475a3.1 3.1 0 0 0 1.079-.697c.843-.843 1.08-2.057 1.145-4.078V14H2zM12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBedsideTable;
