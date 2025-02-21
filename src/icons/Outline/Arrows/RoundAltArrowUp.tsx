import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundAltArrowUp = (props: SvgProps) => (
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
      d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m7.22.97 3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06L12 11.56l-2.47 2.47a.75.75 0 0 1-1.06-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRoundAltArrowUp;
