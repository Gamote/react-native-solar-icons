import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFilters = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M6.5 10.189C3.91216 10.855 2 13.2042 2 15.9999C2 19.3136 4.68629 21.9999 8 21.9999C11.3137 21.9999 14 19.3136 14 15.9999C14 15.2452 13.8607 14.5231 13.6063 13.8578"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M12 20.4722C13.0615 21.4222 14.4633 21.9999 16 21.9999C19.3137 21.9999 22 19.3136 22 15.9999C22 13.2042 20.0878 10.855 17.5 10.189"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgFilters;
