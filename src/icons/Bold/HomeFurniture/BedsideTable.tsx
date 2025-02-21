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
      d="M21.974 7.25H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172.844.843 1.08 2.057 1.146 4.078M13 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M2 10q0-.663.002-1.25h19.996Q22 9.337 22 10v2q0 .662-.002 1.25H2.002Q1.999 12.662 2 12zm10 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2M21.974 14.75H2.026c.066 2.021.302 3.235 1.146 4.078a3.1 3.1 0 0 0 1.078.697V22a.75.75 0 0 0 1.5 0v-2.129C6.82 20 8.194 20 10 20h4c1.806 0 3.18 0 4.25-.129V22a.75.75 0 0 0 1.5 0v-2.475a3.1 3.1 0 0 0 1.078-.697c.844-.843 1.08-2.057 1.146-4.078M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBedsideTable;
