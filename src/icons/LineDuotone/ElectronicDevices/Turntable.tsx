import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTurntable = (props: SvgProps) => (
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
      d="M2 12c0-4.714 0-7.071 1.172-8.536S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.464C22 4.93 22 7.286 22 12s0 7.071-1.172 8.535S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.465C2 19.072 2 16.714 2 12Z"
    />
    <Rect
      width={8}
      height={8}
      x={6}
      y={8}
      stroke="#000"
      strokeWidth={1.5}
      rx={4}
    />
    <Path
      fill="#000"
      d="M14.665 16.33a.75.75 0 1 0 .67 1.34zm1.23.223-.336-.671zm-.56 1.118.895-.447-.671-1.342-.894.447zm2.415-2.907V10.5h-1.5v4.264zm-1.52 2.46a2.75 2.75 0 0 0 1.52-2.46h-1.5c0 .473-.268.906-.691 1.118zM17 9.75a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 17 11.25zm.75-.75a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 19.25 9zM17 8.25a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 17 6.75zm0-1.5A2.25 2.25 0 0 0 14.75 9h1.5a.75.75 0 0 1 .75-.75z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgTurntable;
