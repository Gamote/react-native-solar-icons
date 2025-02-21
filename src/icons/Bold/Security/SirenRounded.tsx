import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSirenRounded = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M2 21.25h2V16a8 8 0 1 1 16 0v5.25h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5m10.75-2.45a1.5 1.5 0 1 0-1.5 0v2.45h1.5zm.845-7.581a.75.75 0 0 1 .977-.414 4.76 4.76 0 0 1 2.623 2.623.75.75 0 0 1-1.39.563 3.26 3.26 0 0 0-1.796-1.796.75.75 0 0 1-.414-.976"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M21.53 5.47a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0M3.53 5.47a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06z"
    />
  </Svg>
);
export default SvgSirenRounded;
