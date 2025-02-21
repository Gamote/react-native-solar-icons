import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPresentationGraph = (props: SvgProps) => (
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
      d="M2 1.25a.75.75 0 0 0 0 1.5h2v7.75c0 3.064 0 4.596 1.004 5.548s2.62.952 5.853.952h.393v3.537l-1.585.792a.75.75 0 1 0 .67 1.342L12 21.839l1.665.832a.75.75 0 1 0 .67-1.342l-1.585-.793V17h.393c3.232 0 4.849 0 5.853-.952S20 13.564 20 10.5V2.75h2a.75.75 0 0 0 0-1.5zm13.53 6.72a.75.75 0 0 1 0 1.06l-1.317 1.318a5 5 0 0 1-.452.416 1.24 1.24 0 0 1-.761.279 1.24 1.24 0 0 1-.761-.279 5 5 0 0 1-.452-.416l-.61-.61L11 9.561l-.177.175L9.53 11.03a.75.75 0 1 1-1.06-1.06l1.317-1.318c.145-.145.302-.302.452-.416A1.24 1.24 0 0 1 11 7.957c.334 0 .585.145.761.279.15.114.307.271.452.416l.61.61.177.176.177-.175L14.47 7.97a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPresentationGraph;
