import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWaterdrops = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10 17.8332C10 20.1344 8.20914 21.9999 6 21.9999C3.79086 21.9999 2 20.1344 2 17.8332C2 16.3934 3.56593 14.4716 4.73823 13.2347C5.43222 12.5025 6.56778 12.5025 7.26177 13.2347C8.43407 14.4716 10 16.3934 10 17.8332Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.7}
      d="M22 17.8332C22 20.1344 20.2091 21.9999 18 21.9999C15.7909 21.9999 14 20.1344 14 17.8332C14 16.3934 15.5659 14.4716 16.7382 13.2347C17.4322 12.5025 18.5678 12.5025 19.2618 13.2347C20.4341 14.4716 22 16.3934 22 17.8332Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.4}
      d="M16 7.83319C16 10.1344 14.2091 11.9999 12 11.9999C9.79086 11.9999 8 10.1344 8 7.83319C8 6.39337 9.56593 4.47165 10.7382 3.23473C11.4322 2.50249 12.5678 2.50249 13.2618 3.23473C14.4341 4.47165 16 6.39337 16 7.83319Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgWaterdrops;
