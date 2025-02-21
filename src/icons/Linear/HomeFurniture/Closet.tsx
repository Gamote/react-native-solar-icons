import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloset = (props: SvgProps) => (
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
      d="M19 22v-.5M5 22v-.5M12 21V2M15 8v2"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v3c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2 8h10M2 15h20M15 18h2M7 18h2"
    />
  </Svg>
);
export default SvgCloset;
