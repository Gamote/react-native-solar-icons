import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRunningRound = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={18.5} cy={4.5} r={2.5} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.4 22v-.959a7 7 0 0 0-2.837-5.553l-.075-.058a2 2 0 0 1-.065-3.087l1.04-.945c1.627-1.48 1.132-4.153-.917-4.952a2.96 2.96 0 0 0-2.271.05l-.522.23c-.54.239-.809.357-1.072.488a13 13 0 0 0-1.275.725c-.247.16-.487.33-.967.673L4 9.636"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m9 17-.26.311A7.47 7.47 0 0 1 3 20M16 12a8.25 8.25 0 0 0 4 0"
      opacity={0.5}
    />
  </Svg>
);
export default SvgRunningRound;
