import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSortFromBottomToTop = (props: SvgProps) => (
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
      d="M16.763 3.289a.75.75 0 0 1 .837.261l3 4a.75.75 0 1 1-1.2.9l-1.65-2.2V20a.75.75 0 1 1-1.5 0V4a.75.75 0 0 1 .513-.711M3.25 8A.75.75 0 0 1 4 7.25h9a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 8m2 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m2 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSortFromBottomToTop;
