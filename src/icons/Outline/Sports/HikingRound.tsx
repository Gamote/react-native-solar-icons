import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHikingRound = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M11.5 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.25 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V11.994a5.88 5.88 0 0 1-5.636.15 1.098 1.098 0 0 0-1.658.832l-.068.686a1.54 1.54 0 0 0 .714 1.455l.333.208a6.59 6.59 0 0 1 3.07 5.001l.143 1.607a.75.75 0 0 1-1.495.134l-.143-1.608a5.09 5.09 0 0 0-2.37-3.862l-.333-.208a3.04 3.04 0 0 1-1.412-2.876l.069-.687c.188-1.885 2.264-2.938 3.894-1.986a4.38 4.38 0 0 0 4.739-.563l.153-.128V8a.75.75 0 0 1 .75-.75M9.749 9.955a.75.75 0 0 1-.704.794l-2.389.143a.971.971 0 0 0-.581 1.692l2.087 1.856a.75.75 0 1 1-.997 1.12L5.08 13.705a2.471 2.471 0 0 1 1.487-4.31l2.389-.144a.75.75 0 0 1 .794.704m-.558 6.82c.4.105.64.515.534.916L9 17.5l.725.19v.003l-.001.005-.005.016-.016.058q-.02.076-.06.207a16 16 0 0 1-.219.686c-.181.525-.456 1.223-.796 1.745-.357.548-.918 1.101-1.35 1.493a16 16 0 0 1-.751.637l-.05.039-.014.01-.004.004s-.002.001-.446-.576l.445.577a.75.75 0 0 1-.916-1.188l.003-.002.01-.008.04-.032.157-.126c.133-.11.317-.265.518-.447.417-.377.856-.823 1.102-1.2.234-.36.46-.912.635-1.417a14 14 0 0 0 .25-.803l.014-.048.003-.011v-.003a.75.75 0 0 1 .917-.534"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgHikingRound;
