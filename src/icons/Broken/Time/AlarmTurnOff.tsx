import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlarmTurnOff = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14.1213 15.1213L12 13M12 13L9.87866 10.8787M12 13L14.1213 10.8787M12 13L9.87868 15.1213"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M3.5 4.5L7.50002 2"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.5 4.5L16.5 2"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.5 5.20404C8.82378 4.43827 10.3607 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 11.3607 3.43827 9.82378 4.20404 8.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgAlarmTurnOff;
