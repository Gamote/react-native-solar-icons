import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSkirt = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.6}
      d="M9.99986 5.5H13.9999L15.9605 21.6781C14.8118 21.8754 13.4947 22 12 22C10.505 22 9.18756 21.8754 8.03857 21.6779L9.99986 5.5Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.4}
      d="M5.83756 5.5L2.08066 17.9529C1.86473 18.6686 2.08222 19.4379 2.7345 19.8293C3.71948 20.4202 5.45239 21.2335 8.03856 21.6779L9.99985 5.5H5.83756Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.7}
      d="M21.2656 19.8293C21.9179 19.4379 22.1354 18.6686 21.9195 17.9529L18.1626 5.5H14L15.9607 21.6781C18.5473 21.2337 20.2806 20.4203 21.2656 19.8293Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16.1086 2H7.89204C6.9237 2 6.43954 2 6.13871 2.29289C5.83789 2.58579 5.83789 3.05719 5.83789 4V5.5H10.0002H14.0002H18.1628V4C18.1628 3.05719 18.1628 2.58579 17.862 2.29289C17.5611 2 17.077 2 16.1086 2Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSkirt;
