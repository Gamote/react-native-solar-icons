import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTranslation2 = (props: SvgProps) => (
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
      d="M16.243 16.243a6 6 0 1 0-8.485 0"
      opacity={0.7}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.071 19.071A9.97 9.97 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.97 9.97 0 0 0 2.929 7.071"
      opacity={0.4}
    />
    <Circle cx={12} cy={12} r={2} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M9.887 17.344c.96-.876 1.44-1.314 2.032-1.342q.081-.004.162 0c.593.028 1.072.466 2.032 1.342 2.087 1.906 3.13 2.858 2.839 3.68a1.3 1.3 0 0 1-.094.206c-.43.77-1.906.77-4.858.77s-4.428 0-4.858-.77a1.4 1.4 0 0 1-.094-.206c-.292-.822.752-1.774 2.84-3.68Z"
    />
  </Svg>
);
export default SvgTranslation2;
