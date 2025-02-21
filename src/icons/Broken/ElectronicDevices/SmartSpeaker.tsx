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
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M3 14.05c.653.57 2.487 2.034 7 2.377M21 14c-.602.554-2.361 2.076-6.99 2.427"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M15.5 16c-.582-1.748-1.653-2.5-3.5-2.5s-2.918.752-3.5 2.5"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 4.411c-.32.276-.5.674-.5 1 0 1.154 1.739 2 4.5 2s4.5-.846 4.5-2c0-.326-.18-.636-.5-.911"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21 12a47 47 0 0 1-.288 5.22l-.017.154a4.84 4.84 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a25 25 0 0 1-5.169 0 51 51 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137 47 47 0 0 1 0-10.689l.016-.137a4.83 4.83 0 0 1 3.918-4.197l.215-.04a24.7 24.7 0 0 1 9.091 0l.323.06a4.7 4.7 0 0 1 3.81 4.067q.084.724.148 1.452"
    />
  </Svg>
);
export default SvgSmartSpeaker;
