import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgColourTuneing = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 12H9.5M22 12H14.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M20.0002 15.6844C20.0002 19.0002 17.7345 22.0002 16.0002 22.0002C13.7315 22.0002 12.0723 18.8423 12.0723 12.0002C12.0723 5.15806 10.4128 2 8.14404 2C6.40978 2 4.14404 5 4.14404 8.31579"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgColourTuneing;
