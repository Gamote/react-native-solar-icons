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
      fill="#000"
      fillRule="evenodd"
      d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5 17.16 21.75 11.5 21.75 1.25 17.16 1.25 11.5m7 0a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m11.22 7.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMinimalisticMagniferZoomOut;
