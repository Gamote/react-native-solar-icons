import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSidebarMinimalistic = (props: SvgProps) => (
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
      d="M3.172 4.172C2 5.343 2 7.229 2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h4.25V3H10C6.229 3 4.343 3 3.172 4.172M15.75 3.006v17.988c2.636-.027 4.104-.191 5.078-1.166C22 18.657 22 16.771 22 13v-2c0-3.771 0-5.657-1.172-6.828-.974-.975-2.442-1.139-5.078-1.166"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSidebarMinimalistic;
