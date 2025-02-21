import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStretching = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M17 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M10.503 9.207a2.25 2.25 0 0 1 3.136 2.068v2.62c0 .47-.12.933-.35 1.343l-2.713 4.848A2.75 2.75 0 0 1 9.1 21.334l-3.848 1.372a.75.75 0 1 1-.504-1.412l3.849-1.373a1.25 1.25 0 0 0 .67-.567l2.713-4.848c.104-.187.159-.397.159-.61v-2.621a.75.75 0 0 0-1.046-.69l-2.455 1.053a.75.75 0 0 0-.229 1.226l.615.599a.75.75 0 0 1-1.048 1.074l-.614-.599a2.25 2.25 0 0 1 .685-3.679zm6.056 4.846a2.75 2.75 0 0 1 3.191 2.715V22a.75.75 0 0 1-1.5 0v-5.232c0-.77-.69-1.357-1.45-1.234l-1.013.165a.75.75 0 1 1-.24-1.481z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgStretching;
