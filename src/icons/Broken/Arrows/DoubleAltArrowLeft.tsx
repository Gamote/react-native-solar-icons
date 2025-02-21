import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDoubleAltArrowLeft = (props: SvgProps) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13 19-6-7 1.5-1.75M13 5l-2 2.333M17 5l-6 7 1.5 1.75M17 19l-2-2.333"
    />
  </Svg>
);
export default SvgDoubleAltArrowLeft;
