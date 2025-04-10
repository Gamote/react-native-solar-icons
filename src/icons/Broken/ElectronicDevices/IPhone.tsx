import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgIPhone = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20 14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M15 19H9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16.7481 2.37744L16.664 2.50361C15.908 3.63769 15.5299 4.20476 14.9778 4.54787C14.868 4.61609 14.7539 4.67715 14.6362 4.73066C14.0444 4.99976 13.3629 4.99976 11.9999 4.99976C10.6369 4.99976 9.95539 4.99976 9.36363 4.73066C9.24596 4.67715 9.13187 4.61609 9.02207 4.54787C8.46992 4.20476 8.09189 3.63771 7.33582 2.50361L7.25171 2.37744"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgIPhone;
