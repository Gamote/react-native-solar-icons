import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSubtitles = (props: SvgProps) => (
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
      d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m4 3.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM7.75 13a.75.75 0 0 0-.75-.75H6a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75m3.75-.75a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5zm7.25.75a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 .75-.75m-6.25 2.25a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5zm3.25.75a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSubtitles;
