import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWomen = (props: SvgProps) => (
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
      d="M12 2.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5M4.25 9a7.75 7.75 0 1 1 8.5 7.714v1.036h1.75a.75.75 0 0 1 0 1.5h-1.75V22a.75.75 0 1 1-1.5 0v-2.75H9.5a.75.75 0 0 1 0-1.5h1.75v-1.036A7.75 7.75 0 0 1 4.25 9"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgWomen;
