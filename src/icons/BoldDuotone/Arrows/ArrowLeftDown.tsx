import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowLeftDown = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5607 13.5L10.5 12.4394L6.53033 8.46969C6.31583 8.25519 5.99324 8.19103 5.71299 8.30711C5.43273 8.4232 5.25 8.69668 5.25 9.00002V18C5.25 18.4142 5.58579 18.75 6 18.75L15 18.75C15.3033 18.75 15.5768 18.5673 15.6929 18.287C15.809 18.0068 15.7448 17.6842 15.5303 17.4697L11.5607 13.5Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967C18.2374 5.17678 17.7626 5.17678 17.4697 5.46967L10.5 12.4393L11.5607 13.5L18.5303 6.53033Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgArrowLeftDown;
