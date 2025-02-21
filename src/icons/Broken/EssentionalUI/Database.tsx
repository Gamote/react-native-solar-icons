import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDatabase = (props: SvgProps) => (
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
      d="M4 18V6M20 12v6"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20 12c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M20 18c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    />
  </Svg>
);
export default SvgDatabase;
