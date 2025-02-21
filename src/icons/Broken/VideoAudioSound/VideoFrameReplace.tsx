import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVideoFrameReplace = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2 6c0 1.886 0 2.828.586 3.414S4.114 10 6 10h5c1.886 0 2.828 0 3.414-.586S15 7.886 15 6s0-2.828-.586-3.414S12.886 2 11 2H6c-1.886 0-2.828 0-3.414.586M21 18c0 1.886 0 2.828-.586 3.414S18.886 22 17 22h-3c-1.886 0-2.828 0-3.414-.586S10 19.886 10 18s0-2.828.586-3.414S12.114 14 14 14h3c1.886 0 2.828 0 3.414.586M6 2.5V10M13.5 14.5V22M11 2.5V10M17.5 14.5V22M2 6h4m9 0h-4M11 18h2.5m7.5 0h-3.5"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 11v-1c0-.932 0-2.398-.152-2.765a2 2 0 0 0-1.083-1.083C19.398 6 18.932 6 18 6m3 5 1-1m-1 1-1-1M3 13v1c0 .932 0 2.398.152 2.765a2 2 0 0 0 1.083 1.083C4.602 18 5.068 18 6 18m-3-5-1 1m1-1 1 1"
    />
  </Svg>
);
export default SvgVideoFrameReplace;
