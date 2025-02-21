import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSkateboard = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M9 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0M19 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M1.584 6.376a.75.75 0 0 1 1.04.208l.813 1.219A3.25 3.25 0 0 0 6.14 9.25h11.718a3.25 3.25 0 0 0 2.704-1.447l.813-1.219a.75.75 0 0 1 1.248.832l-.812 1.219a4.75 4.75 0 0 1-3.953 2.115H6.141a4.75 4.75 0 0 1-3.952-2.115l-.813-1.219a.75.75 0 0 1 .208-1.04"
      clipRule="evenodd"
      opacity={0.5}
    />
  </Svg>
);
export default SvgSkateboard;
