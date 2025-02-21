import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLockPasswordUnlocked = (props: SvgProps) => (
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
      d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"
    />
    <G fill="#000" opacity={0.5}>
      <Path d="M9 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </G>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6 10V8a6 6 0 0 1 11.811-1.5"
      opacity={0.5}
    />
  </Svg>
);
export default SvgLockPasswordUnlocked;
