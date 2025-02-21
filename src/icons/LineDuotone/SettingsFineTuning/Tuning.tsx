import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTuning = (props: SvgProps) => (
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
      d="M10 9.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM20 14.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m17 11 .041-9M7 2v4M7 13v9m10 0v-4"
      opacity={0.5}
    />
  </Svg>
);
export default SvgTuning;
