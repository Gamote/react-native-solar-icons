import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLinkRound = (props: SvgProps) => (
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
      d="M10 15h2a6 6 0 0 0 0-12H8a6 6 0 0 0-4.472 10M14 9h-2a6 6 0 0 0 0 12h4a6 6 0 0 0 4.472-10"
    />
  </Svg>
);
export default SvgLinkRound;
