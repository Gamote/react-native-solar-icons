import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArchiveUpMinimlistic = (props: SvgProps) => (
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
      d="M2 12c0-4.714 0-7.071 1.464-8.536 1.241-1.24 3.123-1.43 6.536-1.46M22 12c0-4.714 0-7.071-1.465-8.536-1.24-1.24-3.122-1.43-6.535-1.46"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 22c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14s0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 17v-6m0 0 2.5 2.5M12 11l-2.5 2.5"
    />
  </Svg>
);
export default SvgArchiveUpMinimlistic;
