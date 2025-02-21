import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMagniferZoomIn = (props: SvgProps) => (
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
      fillRule="evenodd"
      d="M11.157 8.024c.399 0 .722.324.722.723v1.687h1.687a.723.723 0 1 1 0 1.446H11.88v1.687a.723.723 0 1 1-1.445 0V11.88H8.747a.723.723 0 1 1 0-1.446h1.687V8.747c0-.399.323-.723.723-.723"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="m17.1 18.122 3.666 3.667a.723.723 0 0 0 1.023-1.023L18.122 17.1a9 9 0 0 1-1.022 1.022"
    />
  </Svg>
);
export default SvgMagniferZoomIn;
