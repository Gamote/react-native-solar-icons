import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTurntable = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M16.25 9a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M6.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M3.172 3.464C2 4.93 2 7.286 2 12s0 7.071 1.172 8.535S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.465C22 19.072 22 16.714 22 12s0-7.071-1.172-8.536S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.464M17 6.75a2.25 2.25 0 0 0-.75 4.372v3.642c0 .473-.268.906-.691 1.118l-.894.447a.75.75 0 1 0 .67 1.342l.895-.447a2.75 2.75 0 0 0 1.52-2.46v-3.642A2.251 2.251 0 0 0 17 6.75m-7 .5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTurntable;
