import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGamepadOld = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12.75 6H14c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6h2.75"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M8.75 12a.75.75 0 0 0-1.5 0v1.05a.2.2 0 0 1-.2.2H6a.75.75 0 0 0 0 1.5h1.05c.11 0 .2.09.2.2V16a.75.75 0 0 0 1.5 0v-1.05c0-.11.09-.2.2-.2H10a.75.75 0 0 0 0-1.5H8.95a.2.2 0 0 1-.2-.2zM15 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M18 15.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15.75 2a.75.75 0 0 0-1.5 0v1a.25.25 0 0 1-.25.25h-1A1.75 1.75 0 0 0 11.25 5v1h1.5V5a.25.25 0 0 1 .25-.25h1A1.75 1.75 0 0 0 15.75 3z"
    />
  </Svg>
);
export default SvgGamepadOld;
