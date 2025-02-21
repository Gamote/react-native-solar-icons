import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPaletteRound = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2 8V6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0v-6"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="m10 8.243 3.314-3.314a4 4 0 1 1 5.657 5.657L9.306 20.25"
    />
    <Path
      fill="#000"
      d="M18 22v-.75zm0-8v.75zm4 4h-.75zm-9 4.75a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm-1.5-6.5H18v-1.5h-2.5zM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18zm1.5 0A4.75 4.75 0 0 0 18 13.25v1.5A3.25 3.25 0 0 1 21.25 18zM13 21.25H6v1.5h7zm5 0h-1v1.5h1z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </Svg>
);
export default SvgPaletteRound;
