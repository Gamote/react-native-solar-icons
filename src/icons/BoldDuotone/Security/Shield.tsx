import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShield = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3 11.9914C3 17.6294 7.23896 20.3655 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22V8L3 11V11.9914Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M14.1014 21.5273C16.761 20.3655 21 17.6294 21 11.9914V11L12 8V22C13.0193 22 13.38 21.8424 14.1014 21.5273Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M8.83772 2.80472L8.26491 3.00079C5.25832 4.02996 3.75503 4.54454 3.37752 5.08241C3 5.62028 3 7.21907 3 10.4167V11L12 8V2C11.1886 2 10.405 2.26824 8.83772 2.80472Z"
      fill={props.primaryColor}
    />
    <Path
      d="M15.7351 3.00079L15.1623 2.80472C13.595 2.26824 12.8114 2 12 2V8L21 11V10.4167C21 7.21907 21 5.62028 20.6225 5.08241C20.245 4.54454 18.7417 4.02996 15.7351 3.00079Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgShield;
