import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRestart = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#Restart_svg__a)"
    >
      <Path d="M19.729 10.929a8 8 0 1 1-2.072-3.585l.707.706" opacity={0.5} />
      <Path d="M14.121 8.05h4.243V3.808" />
    </G>
    <Defs>
      <ClipPath id="Restart_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgRestart;
