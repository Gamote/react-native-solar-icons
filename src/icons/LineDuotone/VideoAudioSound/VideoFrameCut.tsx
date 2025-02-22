import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVideoFrameCut = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14.5 3.00293C17.2939 3.02331 18.8237 3.16641 19.8284 4.17112C21 5.34269 21 7.22831 21 10.9995V12.9995C21 16.7708 21 18.6564 19.8284 19.828C18.8237 20.8327 17.2939 20.9758 14.5 20.9962M9.49991 20.9962C6.70609 20.9758 5.17627 20.8327 4.17157 19.828C3 18.6564 3 16.7708 3 12.9995V10.9995C3 7.22831 3 5.34269 4.17157 4.17112C5.17627 3.16642 6.70609 3.02331 9.49991 3.00293"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 2V22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeDasharray="3 3"
    />
    <Path
      opacity={0.5}
      d="M17 4V20M7 4V20M3.5 8.5H7M17 8.5H20.5M17 15.5H20.5M3.5 15.5H7"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgVideoFrameCut;
