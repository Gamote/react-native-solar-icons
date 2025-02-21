import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBluetooth = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16.2633 4.6551C17.4211 5.47731 18 5.88842 18 6.45874C18 7.02907 17.4211 7.44017 16.2633 8.26238L11 12V5.22457C11 3.33816 11 2.39496 11.6047 2.08561C11.9666 1.90043 12.3885 2.02253 13 2.38554"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16.2633 19.3449L14.5253 20.5791C12.9813 21.6755 12.2093 22.2238 11.6047 21.9144C11 21.605 11 20.6618 11 18.7754V12L16.2633 15.7376C17.4211 16.5598 18 16.9709 18 17.5413C18 18.1116 17.4211 18.5227 16.2633 19.3449Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M5.5699 14.8856C5.23057 15.1231 5.14804 15.5908 5.38558 15.9301C5.62311 16.2694 6.09076 16.352 6.4301 16.1144L5.5699 14.8856ZM6.4301 16.1144L11.4301 12.6144L10.5699 11.3856L5.5699 14.8856L6.4301 16.1144Z"
      fill={props.primaryColor}
    />
    <Path
      d="M5.5699 9.11442C5.23057 8.87689 5.14804 8.40924 5.38558 8.0699C5.62311 7.73057 6.09076 7.64804 6.4301 7.88558L5.5699 9.11442ZM6.4301 7.88558L11.4301 11.3856L10.5699 12.6144L5.5699 9.11442L6.4301 7.88558Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgBluetooth;
