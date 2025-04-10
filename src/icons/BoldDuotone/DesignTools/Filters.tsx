import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFilters = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.7}
      d="M13.5798 13.7896C13.0765 13.9267 12.5468 13.9998 12 13.9998C9.46679 13.9998 7.30024 12.4299 6.42018 10.21C3.87293 10.9034 2 13.2329 2 15.9998C2 19.3135 4.68629 21.9998 8 21.9998C11.3137 21.9998 14 19.3135 14 15.9998C14 15.2193 13.851 14.4736 13.5798 13.7896Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.4}
      d="M13.5798 13.7896C13.851 14.4736 14 15.2193 14 15.9998C14 17.7768 13.2275 19.3734 12 20.472C13.0615 21.4221 14.4633 21.9998 16 21.9998C19.3137 21.9998 22 19.3135 22 15.9998C22 13.2329 20.1271 10.9034 17.5798 10.21C16.8897 11.9508 15.4085 13.2918 13.5798 13.7896Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgFilters;
