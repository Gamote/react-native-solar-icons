import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRunningRound = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M21 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M8.972 5.81a3.7 3.7 0 0 1 2.846-.062c2.568 1 3.188 4.35 1.15 6.204l-1.04.946-.06.054a1.25 1.25 0 0 0 .148 1.938l.004.002c.059.045.093.07.125.096a7.75 7.75 0 0 1 3.005 6.045V22a.75.75 0 0 1-1.5 0v-.951a6.25 6.25 0 0 0-2.54-4.964l-.006-.005-.081-.062a2.75 2.75 0 0 1-.11-4.225l1.045-.95a2.212 2.212 0 0 0-2.38-3.66l-.522.23c-.545.24-.797.351-1.042.473a12 12 0 0 0-1.2.683c-.23.148-.454.308-.94.654l-1.439 1.024a.75.75 0 1 1-.87-1.222L5.021 7.99c.464-.331.717-.511.979-.68q.652-.421 1.347-.767c.28-.138.563-.263 1.085-.493z"
      clipRule="evenodd"
    />
    <G fill="#000" opacity={0.5}>
      <Path d="M15.272 11.818a.75.75 0 0 1 .91-.545 7.5 7.5 0 0 0 3.636 0 .75.75 0 1 1 .364 1.455 9 9 0 0 1-4.364 0 .75.75 0 0 1-.546-.91M9.48 16.424a.75.75 0 0 1 .096 1.056l-.26.311A8.22 8.22 0 0 1 3 20.752a.75.75 0 0 1 0-1.5 6.72 6.72 0 0 0 5.164-2.42l.26-.311a.75.75 0 0 1 1.056-.096" />
    </G>
  </Svg>
);
export default SvgRunningRound;
