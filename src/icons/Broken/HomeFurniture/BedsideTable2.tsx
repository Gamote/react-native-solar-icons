import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBedsideTable2 = (props: SvgProps) => (
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
      d="M19 22v-1.5M5 22v-1.5"
    />
    <Path fill="#000" d="M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12v-2c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2M2 14h12m8 0h-4M2 8h20"
    />
  </Svg>
);
export default SvgBedsideTable2;
