import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSkateboard = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 7L2.81253 8.2188C3.5544 9.3316 4.80332 10 6.14073 10H17.8593C19.1967 10 20.4456 9.33159 21.1875 8.2188L22 7"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle cx={7} cy={15} r={2} stroke="black" strokeWidth={1.5} />
    <Circle cx={17} cy={15} r={2} stroke="black" strokeWidth={1.5} />
  </Svg>
);
export default SvgSkateboard;
