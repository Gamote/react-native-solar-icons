import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapArrowLeft = (props: SvgProps) => (
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
      d="M22.013 2.953a2.55 2.55 0 0 0-2.816-.473L2.687 9.843a2.338 2.338 0 0 0 0 4.315l16.51 7.362c1.048.468 2.131.181 2.816-.473.69-.659 1.009-1.735.458-2.767l-3.152-5.904-.662.354.662-.354a.79.79 0 0 1 0-.752L22.47 5.72c.55-1.031.232-2.108-.458-2.767m-1.036 1.085c.274.262.36.62.17.976l.662.353-.662-.353-3.151 5.904a2.29 2.29 0 0 0 0 2.165l3.152 5.904c.19.356.103.714-.171.976-.28.267-.72.387-1.169.187l-16.51-7.362c-.73-.326-.73-1.25 0-1.575l16.51-7.363c.448-.2.889-.079 1.169.188"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMapArrowLeft;
