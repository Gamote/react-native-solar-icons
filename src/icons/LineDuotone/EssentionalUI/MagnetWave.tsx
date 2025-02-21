import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMagnetWave = (props: SvgProps) => (
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
      d="M18 18v1.5a1.5 1.5 0 0 1-1.5 1.5H11a9 9 0 1 1 0-18h5.5A1.5 1.5 0 0 1 18 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-5.556a4.5 4.5 0 0 0 0 9H16.5A1.5 1.5 0 0 1 18 18"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.444 3v4.5m0 9V21"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21.5 6S23 7.8 23 12s-1.5 6-1.5 6"
      opacity={0.7}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.5 9s.5.9.5 3-.5 3-.5 3"
      opacity={0.4}
    />
  </Svg>
);
export default SvgMagnetWave;
