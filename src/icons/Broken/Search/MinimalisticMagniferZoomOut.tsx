import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMinimalisticMagniferZoomOut = (props: SvgProps) => (
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
      d="M9 11.5h5M20 20l2 2M6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"
    />
  </Svg>
);
export default SvgMinimalisticMagniferZoomOut;
