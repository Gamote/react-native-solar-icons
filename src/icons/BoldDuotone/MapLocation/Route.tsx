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
      d="M12 2c-1.716 0-3.096 1.38-5.858 4.142S2 10.284 2 12s1.38 3.096 4.142 5.858S10.284 22 12 22s3.096-1.38 5.858-4.142S22 13.716 22 12s-1.38-3.096-4.142-5.858S13.716 2 12 2"
      clipRule="evenodd"
      opacity={0.5}
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12.786 8.487a.75.75 0 0 1 1.06-.034l2.667 2.5a.75.75 0 0 1 0 1.094l-2.667 2.5a.75.75 0 0 1-1.026-1.094l1.283-1.203h-3.436c-.334 0-.844.1-1.247.372-.363.245-.67.643-.67 1.378a.75.75 0 0 1-1.5 0c0-1.265.582-2.117 1.33-2.622.709-.478 1.532-.628 2.087-.628h3.436L12.82 9.547a.75.75 0 0 1-.034-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRoute;
