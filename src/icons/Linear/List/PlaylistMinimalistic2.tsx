import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlaylistMinimalistic2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15 6L3 6"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13 10L3 10"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path d="M9 14H3" stroke="black" strokeWidth={1.5} strokeLinecap="round" />
    <Path d="M8 18H3" stroke="black" strokeWidth={1.5} strokeLinecap="round" />
    <Path
      d="M17 16.5V12.5V8"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle cx={14.5} cy={16.5} r={2.5} stroke="black" strokeWidth={1.5} />
    <Path
      d="M21 12C18.7909 12 17 10.2091 17 8"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgPlaylistMinimalistic2;
