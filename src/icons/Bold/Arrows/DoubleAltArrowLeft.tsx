import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDoubleAltArrowLeft = (props: SvgProps) => (
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
      d="M13.488 4.43a.75.75 0 0 1 .081 1.058L7.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M17.75 5a.75.75 0 0 0-1.32-.488l-6 7a.75.75 0 0 0 0 .976l6 7A.75.75 0 0 0 17.75 19z"
    />
  </Svg>
);
export default SvgDoubleAltArrowLeft;
