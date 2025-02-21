import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlay = (props: SvgProps) => (
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
      d="M7.238 3.044C5.652 2.182 3.75 3.32 3.75 5.033v13.934c0 1.714 1.902 2.851 3.488 1.989l12.812-6.967c1.6-.87 1.6-3.108 0-3.977zM2.25 5.033c0-2.905 3.167-4.687 5.705-3.306l12.812 6.967c2.644 1.438 2.644 5.174 0 6.612L7.955 22.273c-2.538 1.38-5.705-.4-5.705-3.306z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlay;
