import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMusicNote2 = (props: SvgProps) => (
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
      d="M13.75 2c0 2.9 2.35 5.25 5.25 5.25a.75.75 0 0 1 0 1.5 6.74 6.74 0 0 1-5.25-2.507V18a4.75 4.75 0 1 1-1.5-3.464V2zm-1.5 16a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMusicNote2;
