import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPaperBin = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18 2.05222C19.3683 2.14165 20.2228 2.38425 20.7896 3.04233C21.6872 4.08466 21.4469 5.68646 20.9664 8.89004L19.7664 16.89C19.4008 19.3276 19.2179 20.5464 18.374 21.2732C17.5301 22 16.2976 22 13.8328 22H10.167C7.70216 22 6.46972 22 5.6258 21.2732C4.78187 20.5464 4.59905 19.3276 4.23341 16.89L3.03341 8.89004C2.55287 5.68645 2.3126 4.08466 3.21024 3.04233C4.10789 2 5.7276 2 8.96703 2H14"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M21 6H3"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M19 19H5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8 6L3.5 11L11 19M14 6L4 16M20 6L7 19M13 19L20.5 11L16 6M10 6L20 16M4 6L17 19"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgPaperBin;
