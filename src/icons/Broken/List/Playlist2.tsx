import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlaylist2 = (props: SvgProps) => (
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
      d="M16 16.429C16 17.849 14.88 19 13.5 19S11 17.849 11 16.429s1.12-2.572 2.5-2.572S16 15.008 16 16.43Zm0 0V10"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m18.675 7.116-1.755.842c-.341.164-.512.246-.636.373a1 1 0 0 0-.223.356C16 8.853 16 9.042 16 9.42c0 .877 0 1.315.191 1.578a1 1 0 0 0 .63.395c.319.059.714-.13 1.504-.51l1.755-.842c.341-.164.512-.246.636-.373.098-.101.175-.222.223-.356C21 9.147 21 8.958 21 8.58c0-.877 0-1.315-.191-1.578a1 1 0 0 0-.63-.395c-.319-.059-.714.13-1.504.51ZM9 13H3M8 17H3M3 5h7.412M15 5h-1.588M13 9H6.824M3 9h1.324"
    />
  </Svg>
);
export default SvgPlaylist2;
