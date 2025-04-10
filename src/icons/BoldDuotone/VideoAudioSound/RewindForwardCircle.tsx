import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRewindForwardCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill={props.primaryColor}
    />
    <Path
      d="M13.4365 7.46105C13.0994 7.22029 12.631 7.29836 12.3902 7.63542C12.1495 7.97248 12.2276 8.44089 12.5646 8.68165L15.7862 10.9828C16.4841 11.4813 16.4841 12.5186 15.7862 13.0171L12.5646 15.3182C12.2276 15.5589 12.1495 16.0274 12.3902 16.3644C12.631 16.7015 13.0994 16.7795 13.4365 16.5388L16.658 14.2377C18.1935 13.1409 18.1935 10.8589 16.658 9.76215L13.4365 7.46105Z"
      fill={props.primaryColor}
    />
    <Path
      d="M7.50049 15.1318V8.86887C7.50049 8.07017 8.39063 7.59378 9.05519 8.03682L13.7524 11.1683C14.3461 11.5641 14.3461 12.4366 13.7524 12.8324L9.05519 15.9639C8.39063 16.4069 7.50049 15.9305 7.50049 15.1318Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRewindForwardCircle;
