import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextBold = (props: SvgProps) => (
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
      d="M7.609 1.25A3.36 3.36 0 0 0 4.25 4.609V19.94a2.81 2.81 0 0 0 2.809 2.809H14a5.75 5.75 0 0 0 1.608-11.272A5.75 5.75 0 0 0 12 1.25zm4.391 10a4.25 4.25 0 0 0 0-8.5H7.609A1.86 1.86 0 0 0 5.75 4.609v6.641zm-6.25 1.5v7.191c0 .723.586 1.309 1.309 1.309H14a4.25 4.25 0 0 0 0-8.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTextBold;
