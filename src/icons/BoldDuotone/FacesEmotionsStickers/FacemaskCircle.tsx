import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFacemaskCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M21.9982 12.193C21.9994 12.1288 22 12.0645 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 12.1294 2.00246 12.2582 2.00733 12.3864L6.98724 14.1969L9.8645 13.046C11.2354 12.4977 12.7646 12.4977 14.1355 13.046L17 14.1918L21.9982 12.193Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10 10.5C10 11.3284 9.55228 12 9 12C8.44772 12 8 11.3284 8 10.5C8 9.67157 8.44772 9 9 9C9.55228 9 10 9.67157 10 10.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M15.7657 21.2667L16.21 15.4914L13.5784 14.4387C12.5652 14.0334 11.4348 14.0334 10.4216 14.4387L7.79004 15.4914L8.23427 21.2667C9.39657 21.7395 10.6679 22 12 22C13.3321 22 14.6034 21.7395 15.7657 21.2667Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.8241 13.8779L17.7122 15.5224L17.3323 20.4611C19.6317 19.009 21.2982 16.6455 21.8241 13.8779Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.66807 20.4611L6.28947 15.539L2.21191 14.0565C2.77441 16.7471 4.41824 19.0404 6.66807 20.4611Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgFacemaskCircle;
