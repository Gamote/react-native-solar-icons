import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSlashCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M14.018 7.365a.75.75 0 1 0-1.449-.389l-2.588 9.66a.75.75 0 1 0 1.45.388z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSlashCircle;
