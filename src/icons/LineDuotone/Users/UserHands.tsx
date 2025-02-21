import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserHands = (props: SvgProps) => (
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
      d="m20 21.5-.65-5.52C19.15 14.28 17.71 13 16 13H8c-1.71 0-3.15 1.28-3.35 2.98L4 21.5"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M8 13v5c0 1.886 0 2.828.586 3.414S10.114 22 12 22s2.828 0 3.414-.586S16 19.886 16 18v-5"
      opacity={0.5}
    />
    <Circle cx={12} cy={6} r={4} stroke="#000" strokeWidth={1.5} />
  </Svg>
);
export default SvgUserHands;
