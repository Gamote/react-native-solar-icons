import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCardTransfer = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M10 4h4c3.771 0 5.657 0 6.828 1.172.844.843 1.08 2.057 1.146 4.078H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 4 6.229 4 10 4"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="m22 12.818-.409-.409a2.25 2.25 0 0 0-3.182 0l-.801.801a2.251 2.251 0 0 0-4.358.79v1.764a2.25 2.25 0 0 0-1.341 3.827l.409.409H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12q0-.662.002-1.25h19.996Q22 11.338 22 12zM6 15.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M15.5 13.25a.75.75 0 0 1 .75.75v4.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V14a.75.75 0 0 1 .75-.75m3.97.22a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCardTransfer;
