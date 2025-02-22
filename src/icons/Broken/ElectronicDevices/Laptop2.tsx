import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLaptop2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20.5 15V10C20.5 7.17157 20.5 5.75736 19.6213 4.87868C18.7426 4 17.3284 4 14.5 4H14M3.5 15V10C3.5 7.17157 3.5 5.75736 4.37868 4.87868C5.25736 4 6.67157 4 9.5 4H10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 20H5C3.34315 20 2 18.6569 2 17V16C2 15.4477 2.44772 15 3 15H7.33333C7.76607 15 8.18714 15.1404 8.53333 15.4L9.46667 16.1C9.81286 16.3596 10.2339 16.5 10.6667 16.5H13.3333C13.7661 16.5 14.1871 16.3596 14.5333 16.1L15.4667 15.4C15.8129 15.1404 16.2339 15 16.6667 15H21C21.5523 15 22 15.4477 22 16V17C22 18.6569 20.6569 20 19 20H16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgLaptop2;
