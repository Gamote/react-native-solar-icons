import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRuble = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 14h3M10 12V8.2c0-.186 0-.279.012-.356a1 1 0 0 1 .832-.832C10.92 7 11.014 7 11.2 7h2.3a2.5 2.5 0 0 1 0 5zm0 0v5m0-5H9"
    />
  </Svg>
);
export default SvgRuble;
