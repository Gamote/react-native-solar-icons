import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSquareBottomUp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21.9999 12C21.9999 16.714 21.9999 19.0711 20.5354 20.5355C19.1784 21.8926 17.055 21.9921 12.9999 21.9994M2.00049 11C2.00779 6.94493 2.10734 4.8215 3.46438 3.46447C4.92884 2 7.28587 2 11.9999 2C16.714 2 19.071 2 20.5354 3.46447C21.5092 4.43821 21.8355 5.80655 21.9448 8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M3 21L11 13M11 13H5M11 13V19"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgSquareBottomUp;
