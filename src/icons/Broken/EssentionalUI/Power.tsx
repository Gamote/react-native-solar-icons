import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPower = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M12 2V6" stroke="black" strokeWidth={1.5} strokeLinecap="round" />
    <Path
      d="M8.5 3.70593C5.26806 5.07145 3 8.27087 3 12C3 14.3051 3.86656 16.4078 5.29169 18M15.5 3.70593C18.7319 5.07145 21 8.27087 21 12C21 16.9706 16.9706 21 12 21C10.9481 21 9.93834 20.8196 9 20.4879"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgPower;
