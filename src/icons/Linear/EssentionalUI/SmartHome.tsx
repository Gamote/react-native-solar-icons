import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSmartHome = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14 22.0002C17.7712 22.0002 19.6569 22.0002 20.8284 20.7883C22 19.5765 22 17.626 22 13.7251V12.2041C22 9.91567 22 8.77146 21.4808 7.82292C20.9616 6.87439 20.0131 6.2857 18.116 5.10831L16.116 3.86705C14.1106 2.62247 13.1079 2.00018 12 2.00018C10.8921 2.00018 9.88939 2.62247 7.88404 3.86705L5.88404 5.10831C3.98695 6.2857 3.03841 6.87439 2.51921 7.82292C2.20163 8.40311 2.0783 9.05651 2.03041 10.0002"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11 22C11 17.0294 6.97056 13 2 13"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8 22C8 18.6863 5.31371 16 2 16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M5 22C5 20.3431 3.65685 19 2 19"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgSmartHome;
