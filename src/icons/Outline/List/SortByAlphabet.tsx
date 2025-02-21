import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSortByAlphabet = (props: SvgProps) => (
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
      d="M2.25 7A.75.75 0 0 1 3 6.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7m14.25-.75a.75.75 0 0 1 .684.442l4.5 10a.75.75 0 1 1-1.368.616l-1.437-3.194H14.12l-1.437 3.194a.75.75 0 1 1-1.368-.616l4.5-10a.75.75 0 0 1 .684-.442m-1.704 6.364h3.408L16.5 8.828zM2.25 12a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSortByAlphabet;
