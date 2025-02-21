import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSmartSpeaker = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2.507 14.615c.877.765 3.318 2.635 9.493 2.635v-1.5c-5.807 0-7.9-1.736-8.507-2.266zM12 17.25c3.15 0 5.325-.48 6.823-1.066 1.509-.59 2.3-1.278 2.685-1.632l-1.015-1.104c-.298.273-.933.836-2.217 1.339-1.294.507-3.278.963-6.276.963z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M15.5 16c-.582-1.748-1.653-2.5-3.5-2.5s-2.918.752-3.5 2.5"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 4.411c-.32.276-.5.674-.5 1 0 1.154 1.739 2 4.5 2s4.5-.846 4.5-2c0-.326-.18-.636-.5-.911"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M3.321 6.658a4.83 4.83 0 0 1 3.918-4.197l.215-.04a24.7 24.7 0 0 1 9.091 0l.323.06a4.7 4.7 0 0 1 3.81 4.067c.418 3.544.43 7.125.034 10.672l-.017.154a4.84 4.84 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a25 25 0 0 1-5.169 0 51 51 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137 47 47 0 0 1 0-10.689z"
    />
  </Svg>
);
export default SvgSmartSpeaker;
