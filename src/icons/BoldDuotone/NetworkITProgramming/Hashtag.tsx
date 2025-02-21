import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHashtag = (props: SvgProps) => (
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
      d="M10.2 2.277c.4.111.633.525.523.924l-5 18a.75.75 0 0 1-1.446-.402l5-18a.75.75 0 0 1 .924-.522M19.2 2.277c.4.111.633.525.523.924l-5 18a.75.75 0 0 1-1.446-.402l5-18a.75.75 0 0 1 .924-.522"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M3.25 9A.75.75 0 0 1 4 8.25h18a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 9M1.25 16a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
      opacity={0.5}
    />
  </Svg>
);
export default SvgHashtag;
