import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLinkMinimalistic2 = (props: SvgProps) => (
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
      d="m14.163 18.488-.721.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m9.837 14.163 4.326-4.326"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m9.837 5.512.721-.72a6.117 6.117 0 1 1 8.65 8.65l-.72.72"
      opacity={0.5}
    />
  </Svg>
);
export default SvgLinkMinimalistic2;
