import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSkipPrevious = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7.34016 9.35258C5.55328 10.5065 5.55328 13.4935 7.34015 14.6474L18.1292 21.6145C19.8658 22.736 22 21.2763 22 18.9671L22 5.0329C22 2.72368 19.8658 1.26402 18.1292 2.38548L7.34016 9.35258Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M2 5V19"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgSkipPrevious;
