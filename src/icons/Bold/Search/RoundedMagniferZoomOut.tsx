import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundedMagniferZoomOut = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0 9.157 9.157 0 0 1 18.313 0"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M8.024 11.157c0-.4.324-.723.723-.723h4.82a.723.723 0 0 1 0 1.446h-4.82a.723.723 0 0 1-.723-.723"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M18.838 18.838a.723.723 0 0 1 1.023 0l1.927 1.928a.723.723 0 0 1-1.022 1.022l-1.928-1.927a.723.723 0 0 1 0-1.023"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRoundedMagniferZoomOut;
