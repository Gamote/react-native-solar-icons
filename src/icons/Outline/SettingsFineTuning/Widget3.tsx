import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWidget3 = (props: SvgProps) => (
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
      d="M6.5 1.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M3.25 6.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M17.5 12.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m-3.25 4.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M12.75 6.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m4.75-3.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M6.5 12.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M3.25 17.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgWidget3;
