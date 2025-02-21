import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPasswordMinimalisticInput = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M15.75 2a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0v-2.006c2.636-.027 4.104-.191 5.078-1.166C22 17.657 22 15.771 22 12s0-5.657-1.172-6.828c-.974-.975-2.442-1.139-5.078-1.166z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M3.172 18.828C4.343 20 6.229 20 10 20h3V4h-3C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828M13 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPasswordMinimalisticInput;
