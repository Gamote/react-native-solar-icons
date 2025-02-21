import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlanet3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M3 8.0077C3 8.0077 5.93717 11 10.4372 11C13.5 11 15.1257 9.22689 16.5 8.75574C19.0829 7.87029 21 8.0077 21 8.0077"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2.99999 14.0077C2.99999 14.0077 5.08887 13.8703 7.90321 14.7558C9.40069 15.2269 11.172 17 14.5093 17C17.5211 17 19.8904 15.871 21.2701 15"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgPlanet3;
