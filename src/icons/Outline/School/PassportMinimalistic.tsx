import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPassportMinimalistic = (props: SvgProps) => (
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
      d="M8.25 14a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M12 11.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M18.75 4.306a2.75 2.75 0 0 0-3.139-2.722L4.814 3.126A1.82 1.82 0 0 0 3.25 5H3.25v14A3.75 3.75 0 0 0 7 22.75h10A3.75 3.75 0 0 0 20.75 19V9a3.75 3.75 0 0 0-2-3.317zM5.062 6.75H17.01A2.25 2.25 0 0 1 19.25 9v10A2.25 2.25 0 0 1 17 21.25H7A2.25 2.25 0 0 1 4.75 19V6.75zm11.95-1.5h.238v-.944a1.25 1.25 0 0 0-1.427-1.237L5.026 4.61a.321.321 0 0 0 .041.64h11.945"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPassportMinimalistic;
