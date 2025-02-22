import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMaximize = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.60714 22C8.60714 22.4142 8.27136 22.75 7.85714 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V16.1429C1.25 15.7286 1.58579 15.3929 2 15.3929C2.41421 15.3929 2.75 15.7286 2.75 16.1429V20.1893L8.46967 14.4697C8.76256 14.1768 9.23744 14.1768 9.53033 14.4697C9.82322 14.7626 9.82322 15.2374 9.53033 15.5303L3.81066 21.25H7.85714C8.27136 21.25 8.60714 21.5858 8.60714 22Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.3929 2C15.3929 1.58579 15.7286 1.25 16.1429 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V7.85714C22.75 8.27136 22.4142 8.60714 22 8.60714C21.5858 8.60714 21.25 8.27136 21.25 7.85714V3.81066L15.5303 9.53033C15.2374 9.82322 14.7626 9.82322 14.4697 9.53033C14.1768 9.23744 14.1768 8.76256 14.4697 8.46967L20.1893 2.75H16.1429C15.7286 2.75 15.3929 2.41421 15.3929 2Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMaximize;
