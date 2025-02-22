import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTagHorizontal = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M10.221 20H12.858C15.0854 20 16.1992 20 17.1289 19.4986C18.0586 18.9971 18.6488 18.0781 19.8294 16.24L20.5102 15.18L20.5102 15.18C21.5034 13.6336 22 12.8604 22 12C22 11.1396 21.5034 10.3664 20.5102 8.82001L19.8294 7.76001C18.6488 5.92191 18.0586 5.00286 17.1289 4.50143C16.1992 4 15.0854 4 12.858 4H10.221C6.34561 4 4.40789 4 3.20394 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.20394 18.8284C4.40789 20 6.3456 20 10.221 20Z"
      fill={props.primaryColor}
    />
    <Path
      d="M7 7.05469C7.41421 7.05469 7.75 7.37072 7.75 7.76057V16.2358C7.75 16.6256 7.41421 16.9416 7 16.9416C6.58579 16.9416 6.25 16.6256 6.25 16.2358V7.76057C6.25 7.37072 6.58579 7.05469 7 7.05469Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgTagHorizontal;
