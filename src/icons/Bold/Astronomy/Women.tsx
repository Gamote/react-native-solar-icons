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
      d="M12.75 15.96a7.001 7.001 0 1 0-1.5 0v1.79H9.5a.75.75 0 0 0 0 1.5h1.75V22a.75.75 0 1 0 1.5 0v-2.75h1.75a.75.75 0 0 0 0-1.5h-1.75z"
    />
  </Svg>
);
export default SvgWomen;
