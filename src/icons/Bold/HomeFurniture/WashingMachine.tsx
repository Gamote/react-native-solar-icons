import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWashingMachine = (props: SvgProps) => (
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
      d="M20.994 8.25H3.006c.027-2.636.191-4.104 1.166-5.078C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172.975.974 1.139 2.442 1.166 5.078M5.75 5.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m8.75 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M9.75 15a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M3 9.75h18V13c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697V22a.75.75 0 0 1-1.5 0v-1.129C16.18 21 14.806 21 13 21h-2c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-1.475a3.1 3.1 0 0 1-1.078-.697C3 18.657 3 16.771 3 13zm9 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgWashingMachine;
