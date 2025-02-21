import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSkipPrevious = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 11L22 18.9671C22 21.2763 19.8658 22.736 18.1292 21.6145L7.34016 14.6474C5.55328 13.4935 5.55328 10.5065 7.34015 9.35258L18.1292 2.38548C19.8658 1.26402 22 2.72368 22 5.03289V7"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2 5V12M2 19V16"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgSkipPrevious;
