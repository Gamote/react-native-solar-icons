import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRouting = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M8 4.25C7.58579 4.25 7.25 4.58579 7.25 5C7.25 5.41421 7.58579 5.75 8 5.75V4.25ZM20 18.25H7.5V19.75H20V18.25ZM7.5 12.75H16.5V11.25H7.5V12.75ZM16.5 4.25H8V5.75H16.5V4.25ZM20.75 8.5C20.75 6.15279 18.8472 4.25 16.5 4.25V5.75C18.0188 5.75 19.25 6.98122 19.25 8.5H20.75ZM16.5 12.75C18.8472 12.75 20.75 10.8472 20.75 8.5H19.25C19.25 10.0188 18.0188 11.25 16.5 11.25V12.75ZM4.75 15.5C4.75 13.9812 5.98122 12.75 7.5 12.75V11.25C5.15279 11.25 3.25 13.1528 3.25 15.5H4.75ZM7.5 18.25C5.98122 18.25 4.75 17.0188 4.75 15.5H3.25C3.25 17.8472 5.15279 19.75 7.5 19.75V18.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M18 17L20 19L18 21"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx={6} cy={5} r={2} stroke={props.primaryColor} strokeWidth={1.5} />
  </Svg>
);
export default SvgRouting;
