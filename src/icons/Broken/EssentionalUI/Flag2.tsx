import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlag2 = (props: SvgProps) => (
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
      d="M5 22v-8m0 0 2.47-.494a8.68 8.68 0 0 1 4.925.452 8.68 8.68 0 0 0 5.327.361l.1-.025a.9.9 0 0 0 .553-1.335l-1.56-2.601c-.342-.57-.513-.854-.553-1.163a1.5 1.5 0 0 1 0-.39c.04-.309.211-.594.553-1.163l1.278-2.13a.73.73 0 0 0-.803-1.085 7.3 7.3 0 0 1-4.482-.304l-.413-.165a8.7 8.7 0 0 0-4.924-.452L5 4m0 10v-3m0-7V2m0 2v3"
    />
  </Svg>
);
export default SvgFlag2;
