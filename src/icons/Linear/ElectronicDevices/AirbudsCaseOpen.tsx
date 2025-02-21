import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAirbudsCaseOpen = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M3 12.833c0-.781 0-1.172.207-1.442q.08-.105.184-.184C3.661 11 4.051 11 4.833 11h14.334c.781 0 1.172 0 1.442.207q.105.08.184.184c.207.27.207.66.207 1.442V13c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13zM3.5 5.941V4.625A2.625 2.625 0 0 1 6.125 2 4.375 4.375 0 0 1 10.5 6.375V11H6.794V9.236a.824.824 0 0 0-.823-.824A2.47 2.47 0 0 1 3.5 5.942ZM20.5 5.941V4.625A2.625 2.625 0 0 0 17.875 2 4.375 4.375 0 0 0 13.5 6.375V11h3.706V9.236c0-.455.369-.824.823-.824a2.47 2.47 0 0 0 2.471-2.47Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M8 11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2"
    />
  </Svg>
);
export default SvgAirbudsCaseOpen;
