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
      d="M9 13.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M13 1.25a.75.75 0 0 1 .75.75c0 2.9 2.35 5.25 5.25 5.25a.75.75 0 0 1 0 1.5A6.75 6.75 0 0 1 12.25 2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M12.25 14.536V2c0 1.607.562 3.084 1.5 4.243V18a4.74 4.74 0 0 0-1.5-3.464"
      opacity={0.5}
    />
  </Svg>
);
export default SvgMusicNote2;
