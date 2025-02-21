import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLaptop3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14.5 2H9.5C6.67157 2 5.25736 2 4.37868 2.87868C3.5 3.75736 3.5 5.17157 3.5 8V11C3.5 12.8856 3.5 13.8284 4.08579 14.4142C4.67157 15 5.61438 15 7.5 15H16.5C18.3856 15 19.3284 15 19.9142 14.4142C20.5 13.8284 20.5 12.8856 20.5 11V8C20.5 5.17157 20.5 3.75736 19.6213 2.87868C18.7426 2 17.3284 2 14.5 2Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M5 22H19C20.6569 22 22 20.6569 22 19V18C22 17.4477 21.5523 17 21 17H16.6667C16.2339 17 15.8129 17.1404 15.4667 17.4L14.5333 18.1C14.1871 18.3596 13.7661 18.5 13.3333 18.5H10.6667C10.2339 18.5 9.81286 18.3596 9.46667 18.1L8.53333 17.4C8.18714 17.1404 7.76607 17 7.33333 17H3C2.44772 17 2 17.4477 2 18V19C2 20.6569 3.34315 22 5 22Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgLaptop3;
