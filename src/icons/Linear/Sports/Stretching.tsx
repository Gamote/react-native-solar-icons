import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStretching = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={14.5} cy={4.5} r={2.5} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5 22 3.849-1.373a2 2 0 0 0 1.073-.907l2.712-4.848a2 2 0 0 0 .255-.977v-2.62a1.5 1.5 0 0 0-2.091-1.38l-2.456 1.053a1.5 1.5 0 0 0-.456 2.453L8.5 14M19 22v-5.232a2 2 0 0 0-2.32-1.974l-1.013.164"
    />
  </Svg>
);
export default SvgStretching;
