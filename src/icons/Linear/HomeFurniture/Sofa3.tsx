import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSofa3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M4 18H20C21.1046 18 22 17.1046 22 16C22 14.8954 21.1046 14 20 14H4C2.89543 14 2 14.8954 2 16C2 17.1046 2.89543 18 4 18Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M4.49999 14L4.42534 13.7014C3.33851 9.35409 2.7951 7.18043 3.8659 5.67821C3.93345 5.58345 4.0051 5.49169 4.08065 5.40317C5.2783 4 7.51886 4 12 4C16.4811 4 18.7217 4 19.9193 5.40317C19.9949 5.49169 20.0665 5.58345 20.1341 5.67821C21.2049 7.18043 20.6615 9.35409 19.5746 13.7014L19.5 14"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M20 20V18M4 20V18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgSofa3;
