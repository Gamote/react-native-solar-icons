import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgColourTuneing = (props: SvgProps) => (
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
      d="M2 12h7.5M22 12h-7.5"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20 15.684C20 19 17.735 22 16 22c-2.268 0-3.928-3.158-3.928-10S10.412 2 8.144 2c-1.734 0-4 3-4 6.316"
    />
  </Svg>
);
export default SvgColourTuneing;
