import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSmartphone = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12.0516 2C13.7318 1.99999 15.0627 1.99997 16.1043 2.14245C17.1762 2.28908 18.0438 2.59803 18.728 3.29418C19.4122 3.99033 19.7159 4.87308 19.86 5.9637C20 7.02342 20 8.37752 20 10.087V10.0871V13.913V13.913C20 15.6225 20 16.9766 19.86 18.0363C19.7159 19.1269 19.4122 20.0097 18.728 20.7058C18.0438 21.402 17.1762 21.7109 16.1043 21.8575C15.0627 22 13.7318 22 12.0517 22H12.0516H11.9484H11.9483C10.2681 22 8.93729 22 7.89575 21.8575C6.82382 21.7109 5.95621 21.402 5.27199 20.7058C4.58778 20.0097 4.28413 19.1269 4.14001 18.0363C3.99998 16.9766 3.99999 15.6225 4 13.913V13.9129V10.087V10.087C3.99999 8.3775 3.99998 7.02343 4.14001 5.9637C4.28413 4.87308 4.58778 3.99033 5.27199 3.29418C5.95621 2.59803 6.82382 2.28908 7.89575 2.14245C8.93731 1.99997 10.2682 1.99999 11.9484 2H11.9484H12.0516H12.0516Z"
      fill={props.primaryColor}
    />
    <Path
      d="M8.57129 18.5112C8.57129 18.1258 8.87829 17.8135 9.257 17.8135H14.7427C15.1214 17.8135 15.4284 18.1258 15.4284 18.5112C15.4284 18.8965 15.1214 19.2088 14.7427 19.2088H9.257C8.87829 19.2088 8.57129 18.8965 8.57129 18.5112Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSmartphone;
