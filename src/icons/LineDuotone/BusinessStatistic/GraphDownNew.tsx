import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGraphDownNew = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7 10L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L12.2929 10.7071C12.6834 10.3166 13.3166 10.3166 13.7071 10.7071L17 14M17 14V11.5M17 14H14.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.5}
      d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle cx={19} cy={5} r={3} stroke="black" strokeWidth={1.5} />
  </Svg>
);
export default SvgGraphDownNew;
