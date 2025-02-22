import * as React from "react";
import Svg, { Circle, Ellipse, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUsersGroupRounded = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={9.00098} cy={6} r={4} fill={props.primaryColor} />
    <Ellipse cx={9.00098} cy={17.001} rx={7} ry={4} fill={props.primaryColor} />
    <Path
      d="M20.9996 17.0007C20.9996 18.6576 18.9641 20.0007 16.4788 20.0007C17.211 19.2003 17.7145 18.1958 17.7145 17.0021C17.7145 15.807 17.2098 14.8015 16.4762 14.0007C18.9615 14.0007 20.9996 15.3438 20.9996 17.0007Z"
      fill={props.primaryColor}
    />
    <Path
      d="M17.9996 6.00098C17.9996 7.65783 16.6565 9.00098 14.9996 9.00098C14.6383 9.00098 14.292 8.93711 13.9712 8.82006C14.4443 7.98796 14.7145 7.02547 14.7145 5.99986C14.7145 4.97501 14.4447 4.01318 13.9722 3.18151C14.2927 3.0647 14.6387 3.00098 14.9996 3.00098C16.6565 3.00098 17.9996 4.34412 17.9996 6.00098Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgUsersGroupRounded;
