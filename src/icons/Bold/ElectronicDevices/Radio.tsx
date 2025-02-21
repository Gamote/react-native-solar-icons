import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRadio = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M15.75 12.25v-.75a.75.75 0 0 0-1.5 0v.75H7a1.25 1.25 0 1 1 0-2.5h10a1.25 1.25 0 1 1 0 2.5zM6.75 17a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M15.32 3.679a.75.75 0 1 0-.64-1.357L6.768 6.046c-1.736.089-2.821.351-3.595 1.126C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828S17.771 6 14 6h-3.613zM7 8.25a2.75 2.75 0 0 0 0 5.5h10a2.75 2.75 0 1 0 0-5.5zM5.25 17a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m7 0a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRadio;
