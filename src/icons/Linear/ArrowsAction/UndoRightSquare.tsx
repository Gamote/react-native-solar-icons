import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUndoRightSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M17.5 9.50075H9.96155C8.59369 9.50075 7.90976 9.50075 7.4141 9.82122C7.17646 9.97487 6.97412 10.1772 6.82048 10.4148C6.5 10.9105 6.5 11.5944 6.5 12.9623C6.5 14.3301 6.5 15.0141 6.82047 15.5097C6.97412 15.7474 7.17645 15.9497 7.4141 16.1034C7.90976 16.4238 8.59369 16.4238 9.96154 16.4238H14.5M17.5 9.50075L15.25 7.42383M17.5 9.50075L15.25 11.5777"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgUndoRightSquare;
