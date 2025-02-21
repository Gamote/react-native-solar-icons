import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgForbiddenCircle = (props: SvgProps) => (
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
      d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M2.75 12A9.25 9.25 0 0 1 12 2.75c2.284 0 4.376.828 5.99 2.2l-.02.02-13 13-.02.02A9.2 9.2 0 0 1 2.75 12m3.26 7.05A9.25 9.25 0 0 0 19.05 6.01l-.019.02-13 13z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgForbiddenCircle;
