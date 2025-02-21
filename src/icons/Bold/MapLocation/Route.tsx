import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoute = (props: SvgProps) => (
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
      d="M6.142 6.142C8.904 3.381 10.284 2 12 2s3.096 1.38 5.858 4.142S22 10.284 22 12s-1.38 3.096-4.142 5.858S13.716 22 12 22s-3.096-1.38-5.858-4.142S2 13.716 2 12s1.38-3.096 4.142-5.858m7.704 2.31a.75.75 0 1 0-1.026 1.095l1.283 1.203h-3.436c-.555 0-1.378.15-2.087.628-.748.505-1.33 1.357-1.33 2.622a.75.75 0 0 0 1.5 0c0-.735.307-1.133.67-1.378a2.37 2.37 0 0 1 1.247-.372h3.436l-1.283 1.203a.75.75 0 0 0 1.026 1.094l2.667-2.5a.75.75 0 0 0 0-1.094z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRoute;
