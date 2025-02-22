import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowRightDown = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.4697 8.46969C17.6842 8.25519 18.0068 8.19103 18.287 8.30711C18.5673 8.4232 18.75 8.69668 18.75 9.00002V18C18.75 18.4142 18.4142 18.75 18 18.75L9.00002 18.75C8.69668 18.75 8.4232 18.5673 8.30711 18.287C8.19103 18.0068 8.25519 17.6842 8.46969 17.4697L17.4697 8.46969Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L13.5 12.4393L12.4393 13.5L5.46967 6.53033Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgArrowRightDown;
