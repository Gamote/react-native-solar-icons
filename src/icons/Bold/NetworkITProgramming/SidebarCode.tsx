import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSidebarCode = (props: SvgProps) => (
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
      d="M2 11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4.25v18H10c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13zm13.75 9.994V3.006c2.636.027 4.104.191 5.078 1.166C22 5.343 22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828-.974.975-2.442 1.139-5.078 1.166M9.97 15.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l.47-.47-.47-.47a.75.75 0 0 1 0-1.06m-.268-1.207a.75.75 0 1 0-1.404-.526l-1.5 4a.75.75 0 0 0 1.404.526zM6.53 13.47a.75.75 0 0 1 0 1.06l-.47.47.47.47a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06l1-1a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSidebarCode;
