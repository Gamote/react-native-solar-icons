import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPassport = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M9.75 13a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M4 18.694v-14a1 1 0 0 0 1 1h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3M8.25 13a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m1 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M18 4v1.865c-.313-.11-.65-.17-1-.17H5a1 1 0 0 1-1-1v-.072c0-.533.392-.985.92-1.06L15.717 2.02A2 2 0 0 1 18 4"
      opacity={0.5}
    />
  </Svg>
);
export default SvgPassport;
