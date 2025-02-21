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
      fillRule="evenodd"
      d="M12 9.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M9.75 13a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      clipRule="evenodd"
    />
    <Path fill="#000" d="M10 18.25a.75.75 0 0 0 0 1.5h4a.75.75 0 1 0 0-1.5z" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M15.611 1.584a2.75 2.75 0 0 1 3.139 2.722v1.377a3.75 3.75 0 0 1 2 3.317v10A3.75 3.75 0 0 1 17 22.75H7A3.75 3.75 0 0 1 3.25 19V5h.001l-.001-.07c0-.907.666-1.676 1.564-1.804zM5.071 6.75H4.75V19A2.25 2.25 0 0 0 7 21.25h10A2.25 2.25 0 0 0 19.25 19V9a2.25 2.25 0 0 0-2.24-2.25zm12.179-1.5H5.067a.321.321 0 0 1-.041-.639L15.823 3.07a1.25 1.25 0 0 1 1.427 1.237z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPassport;
