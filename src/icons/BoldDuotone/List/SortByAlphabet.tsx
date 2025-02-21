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
      d="M17.184 6.692a.75.75 0 0 0-1.368 0l-4.5 10a.75.75 0 1 0 1.368.616l1.437-3.194h4.758l1.437 3.194a.75.75 0 0 0 1.368-.616zM16.5 8.828l-1.704 3.786h3.408z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M2.25 7A.75.75 0 0 1 3 6.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7"
      clipRule="evenodd"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M2.25 12a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M2.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      opacity={0.5}
    />
  </Svg>
);
export default SvgSortByAlphabet;
