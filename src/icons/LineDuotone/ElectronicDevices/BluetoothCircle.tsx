import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBluetoothCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M11 12L14.2 9.5929C14.7333 9.19171 15 8.99112 15 8.71759C15 8.44405 14.7333 8.24346 14.2 7.84228L12.7455 6.74814C11.9838 6.17524 11.603 5.88879 11.3015 6.04C11 6.1912 11 6.66862 11 7.62345V12ZM11 12V16.3766C11 17.3314 11 17.8088 11.3015 17.96C11.603 18.1112 11.9838 17.8248 12.7455 17.2519L14.2 16.1577C14.7333 15.7565 15 15.5559 15 15.2824C15 15.0089 14.7333 14.8083 14.2 14.4071L11 12ZM11 12L8 9.5M11 12L8 14.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle cx={12} cy={12} r={10} stroke="black" strokeWidth={1.5} />
  </Svg>
);
export default SvgBluetoothCircle;
