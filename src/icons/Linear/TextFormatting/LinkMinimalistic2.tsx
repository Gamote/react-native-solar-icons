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
      d="m14.163 18.488-.721.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72M9.837 14.163l4.326-4.326M9.837 5.512l.721-.72a6.117 6.117 0 1 1 8.65 8.65l-.72.72"
    />
  </Svg>
);
export default SvgLinkMinimalistic2;
