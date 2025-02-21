import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMagnetWave = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18 18V19.5C18 20.3284 17.3284 21 16.5 21H14.4444H11C6.02944 21 2 16.9706 2 12C2 7.02944 6.02943 3 11 3H14.4444H16.5C17.3284 3 18 3.67157 18 4.5V6C18 6.82843 17.3284 7.5 16.5 7.5H14.4444H10.9444C8.45916 7.5 6.44444 9.51472 6.44444 12C6.44444 14.4853 8.45916 16.5 10.9444 16.5H14.4444H16.5C17.3284 16.5 18 17.1716 18 18Z"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.5}
      d="M14.4443 3V7.5M14.4443 16.5V21"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.7}
      d="M21.5 6C21.5 6 23 7.8 23 12C23 16.2 21.5 18 21.5 18"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.4}
      d="M19.5 9C19.5 9 20 9.9 20 12C20 14.1 19.5 15 19.5 15"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgMagnetWave;
