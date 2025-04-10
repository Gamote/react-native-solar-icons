import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUndoLeftSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6.5 9.49977H14.0385C15.4063 9.49977 16.0902 9.49977 16.5859 9.82025C16.8235 9.97389 17.0259 10.1762 17.1795 10.4139C17.5 10.9095 17.5 11.5935 17.5 12.9613C17.5 14.3292 17.5 15.0131 17.1795 15.5087C17.0259 15.7464 16.8235 15.9487 16.5859 16.1024C16.0902 16.4229 15.4063 16.4229 14.0385 16.4229H9.5M6.5 9.49977L8.75 7.42285M6.5 9.49977L8.75 11.5767"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgUndoLeftSquare;
