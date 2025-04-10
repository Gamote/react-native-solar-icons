import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRewindBackCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10.5636 7.46105C10.9006 7.22029 11.369 7.29836 11.6098 7.63542C11.8506 7.97248 11.7725 8.44089 11.4354 8.68165L8.21388 10.9828C7.51594 11.4813 7.51594 12.5186 8.21388 13.0171L11.4354 15.3182C11.7725 15.5589 11.8506 16.0274 11.6098 16.3644C11.369 16.7015 10.9006 16.7795 10.5636 16.5388L7.34202 14.2377C5.80656 13.1409 5.80656 10.8589 7.34202 9.76215L10.5636 7.46105Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16.4996 15.1318V8.86887C16.4996 8.07017 15.6094 7.59378 14.9449 8.03682L10.2476 11.1683C9.6539 11.5641 9.6539 12.4366 10.2476 12.8324L14.9449 15.9639C15.6094 16.4069 16.4996 15.9305 16.4996 15.1318Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRewindBackCircle;
