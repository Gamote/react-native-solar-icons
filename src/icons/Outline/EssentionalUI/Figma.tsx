import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFigma = (props: SvgProps) => (
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
      d="M8.667 1.25a4.083 4.083 0 0 0-2.36 7.417A4.08 4.08 0 0 0 4.584 12c0 1.376.681 2.594 1.725 3.333a4.083 4.083 0 1 0 6.442 3.333v-3.504a4.083 4.083 0 1 0 4.942-6.496 4.083 4.083 0 0 0-2.36-7.417zm2.583 13.333H8.667a2.583 2.583 0 1 1 0-5.166h2.583v5.166M8.667 7.917h2.583V2.75H8.667a2.583 2.583 0 1 0 0 5.167m9.25-2.584a2.583 2.583 0 0 1-2.58 2.584H12.75V2.75h2.583a2.583 2.583 0 0 1 2.584 2.583m-5.167 6.664a2.583 2.583 0 0 1 2.58-2.58h.006a2.583 2.583 0 1 1-2.586 2.586zm-4.083 4.086a2.583 2.583 0 1 0 2.583 2.584v-2.584z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFigma;
