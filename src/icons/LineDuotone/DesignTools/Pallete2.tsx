import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPallete2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 12.0261C2 17.1723 5.86713 21.413 10.8468 21.9863C11.5816 22.0709 12.2938 21.7576 12.8168 21.2333C13.4703 20.5781 13.4703 19.5159 12.8168 18.8607C12.2938 18.3364 11.8674 17.5541 12.2619 16.9268C13.8385 14.4192 22 20.178 22 12.0261C22 6.48884 17.5228 2 12 2C6.47715 2 2 6.48884 2 12.0261Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Circle
      opacity={0.5}
      cx={17.5}
      cy={11.5}
      r={1.5}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Circle
      opacity={0.5}
      cx={6.5}
      cy={11.5}
      r={1.5}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M11 7C11 7.82843 10.3284 8.5 9.5 8.5C8.67157 8.5 8 7.82843 8 7C8 6.17157 8.67157 5.5 9.5 5.5C10.3284 5.5 11 6.17157 11 7Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M16 7C16 7.82843 15.3284 8.5 14.5 8.5C13.6716 8.5 13 7.82843 13 7C13 6.17157 13.6716 5.5 14.5 5.5C15.3284 5.5 16 6.17157 16 7Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgPallete2;
