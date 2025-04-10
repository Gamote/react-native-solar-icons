import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserHands = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.90469 15.8918C4.149 13.8151 5.90904 12.25 8.00007 12.25H16.0001C18.0911 12.25 19.8511 13.8151 20.0955 15.8918L20.7449 21.4124C20.7933 21.8237 20.4991 22.1965 20.0877 22.2449C19.6763 22.2933 19.3036 21.999 19.2552 21.5876L18.6057 16.0671C18.4503 14.7458 17.3305 13.75 16.0001 13.75H8.00007C6.66967 13.75 5.54986 14.7458 5.39441 16.0671L4.74494 21.5876C4.69654 21.999 4.32382 22.2933 3.91244 22.2449C3.50106 22.1965 3.20681 21.8237 3.25521 21.4124L3.90469 15.8918Z"
      fill={props.primaryColor}
    />
    <Circle cx={12} cy={6} r={4} fill={props.primaryColor} />
    <Path
      opacity={0.5}
      d="M8 13.75V18C8 19.8856 8 20.8284 8.58579 21.4142C9.17157 22 10.1144 22 12 22C13.8856 22 14.8284 22 15.4142 21.4142C16 20.8284 16 19.8856 16 18V13.75H8Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgUserHands;
