import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBug = (props: SvgProps) => (
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
      d="M19 15v-3.062A3.94 3.94 0 0 0 15.063 8H8.936A3.94 3.94 0 0 0 5 11.938V15a7 7 0 1 0 14 0Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M16.5 8.5v-1a4.5 4.5 0 1 0-9 0v1"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 14h3M5 14H2M14.5 3.5 17 2M9.5 3.5 7 2M20.5 20l-2-.8M20.5 8l-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15"
      opacity={0.5}
    />
  </Svg>
);
export default SvgBug;
