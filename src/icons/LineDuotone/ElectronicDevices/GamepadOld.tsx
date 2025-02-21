import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGamepadOld = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#GamepadOld_svg__a)">
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 10v4m-2-2h4"
        opacity={0.5}
      />
      <G fill="#000" opacity={0.5}>
        <Path d="M16 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M18 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      </G>
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 4V3a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V0"
        opacity={0.5}
      />
      <Path
        stroke="#000"
        strokeWidth={1.5}
        d="M2 12c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 4.545C5.8 4 7.2 4 10 4h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 7.8 22 9.2 22 12s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 20 16.8 20 14 20h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 16.2 2 14.8 2 12Z"
      />
    </G>
    <Defs>
      <ClipPath id="GamepadOld_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgGamepadOld;
