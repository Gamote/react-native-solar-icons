import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMagniferZoomOut = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313 9.157 9.157 0 0 0 0 18.313"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M17.1 18.122a9 9 0 0 0 1.022-1.022l3.667 3.666a.723.723 0 0 1-1.023 1.023z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M8.024 11.157c0-.4.324-.723.723-.723h4.82a.723.723 0 1 1 0 1.445h-4.82a.723.723 0 0 1-.723-.723"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMagniferZoomOut;
