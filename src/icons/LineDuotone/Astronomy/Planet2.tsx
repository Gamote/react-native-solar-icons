import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlanet2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M17.6713 6.2247C19.7734 5.81044 21.3248 5.95718 21.8291 6.76327C22.8403 8.37947 19.2594 12.0342 13.8309 14.9264C8.40242 17.8185 3.18203 18.8529 2.17085 17.2367C1.65519 16.4125 2.33376 15.0582 3.84259 13.5452"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeDasharray="3.5 2.5"
    />
  </Svg>
);
export default SvgPlanet2;
