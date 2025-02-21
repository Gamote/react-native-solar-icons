import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTuning = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M13.752 14.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M3.752 9.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
    />
    <G fill="#000" opacity={0.5}>
      <Path d="M7.462 6.584a3 3 0 0 0-1.5.021V2a.75.75 0 0 1 1.5 0zM5.962 12.394a3 3 0 0 0 1.5.021V22a.75.75 0 0 1-1.5 0zM15.962 17.394V22a.75.75 0 0 0 1.5 0v-4.585a3 3 0 0 1-1.5-.021M17.462 11.584V2a.75.75 0 0 0-1.5 0v9.605a3 3 0 0 1 1.5-.021" />
    </G>
  </Svg>
);
export default SvgTuning;
