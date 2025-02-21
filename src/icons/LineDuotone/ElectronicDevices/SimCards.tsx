import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSimCards = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M3.172 20.828C4.343 22 6.229 22 10 22s5.657 0 6.828-1.172S18 17.771 18 14c0-1.025-.41-2.006-1.136-2.731l-4.133-4.133A3.86 3.86 0 0 0 10 6C6.229 6 4.343 6 3.172 7.172S2 10.229 2 14s0 5.657 1.172 6.828Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M18 17.899c1.3-.128 2.175-.417 2.828-1.07C22 15.656 22 13.77 22 10c0-1.025-.41-2.006-1.136-2.731l-4.133-4.133A3.86 3.86 0 0 0 14.001 2c-3.772 0-5.658 0-6.83 1.172C6.519 3.825 6.23 4.7 6.102 6M10 14H9c-.943 0-1.414 0-1.707.293S7 15.057 7 16v1c0 .943 0 1.414.293 1.707S8.057 19 9 19h1m0-5h1c.943 0 1.414 0 1.707.293S13 15.057 13 16v.5M10 14v2.5m0 2.5h1c.943 0 1.414 0 1.707-.293S13 17.943 13 17v-.5M10 19v-2.5m0 0h3"
      opacity={0.5}
    />
  </Svg>
);
export default SvgSimCards;
