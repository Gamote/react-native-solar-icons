import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTraffic = (props: SvgProps) => (
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
      d="M14.5 2.315c3.514.904 6.28 3.67 7.185 7.185M22 12a10 10 0 0 1-18 6m-1.808-4.05A10 10 0 0 1 12 2"
    />
  </Svg>
);
export default SvgTraffic;
