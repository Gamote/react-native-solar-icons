import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMagnet = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17 2H13C7.47715 2 3 6.47715 3 12C3 17.5228 7.47715 22 13 22H17V17H13C10.2386 17 8 14.7614 8 12C8 9.23858 10.2386 7 13 7H17V2Z"
      fill={props.primaryColor}
    />
    <G opacity={0.5}>
      <Path
        d="M17 7H19.5C20.3284 7 21 6.32843 21 5.5V3.5C21 2.67157 20.3284 2 19.5 2H17V7Z"
        fill={props.primaryColor}
      />
      <Path
        d="M17 17V22H19.5C20.3284 22 21 21.3284 21 20.5V18.5C21 17.6716 20.3284 17 19.5 17H17Z"
        fill={props.primaryColor}
      />
    </G>
  </Svg>
);
export default SvgMagnet;
