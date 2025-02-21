import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCosmetic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2 12.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V18a3 3 0 1 1-6 0zM3 10.5h4V6a1 1 0 0 0-1.447-.894l-2 1A1 1 0 0 0 3 7zM11 10.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0M15.75 17.71a7 7 0 0 0 1.5 0v1.79h2.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5h2.25z"
    />
  </Svg>
);
export default SvgCosmetic;
