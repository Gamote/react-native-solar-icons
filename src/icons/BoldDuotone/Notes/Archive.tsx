import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArchive = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 21H12.5C16.2712 21 18.1569 21 19.3284 19.8284C20.5 18.6569 20.5 16.7713 20.5 13V6.99805C20.3548 7.00008 20.1509 7.00005 20 7.00002H4C3.84905 7.00005 3.6452 7.00008 3.5 6.99805V13C3.5 16.7713 3.5 18.6569 4.67157 19.8284C5.84315 21 7.72876 21 11.5 21ZM9.07612 11.1173C9 11.3011 9 11.5341 9 12C9 12.4659 9 12.6989 9.07612 12.8827C9.17761 13.1277 9.37229 13.3224 9.61732 13.4239C9.80109 13.5 10.0341 13.5 10.5 13.5H13.5C13.9659 13.5 14.1989 13.5 14.3827 13.4239C14.6277 13.3224 14.8224 13.1277 14.9239 12.8827C15 12.6989 15 12.4659 15 12C15 11.5341 15 11.3011 14.9239 11.1173C14.8224 10.8723 14.6277 10.6776 14.3827 10.5761C14.1989 10.5 13.9659 10.5 13.5 10.5H10.5C10.0341 10.5 9.80109 10.5 9.61732 10.5761C9.37229 10.6776 9.17761 10.8723 9.07612 11.1173Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M2 5C2 4.05719 2 3.58579 2.29289 3.29289C2.58579 3 3.05719 3 4 3H20C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgArchive;
