import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRulerAngular = (props: SvgProps) => (
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
      d="M12 9h-1c-.943 0-1.414 0-1.707.293S9 10.057 9 11v7.5c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5V6c0-1.886 0-2.828.586-3.414S4.114 2 6 2h12.5c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C22 3.393 22 4.096 22 5.5s0 2.107-.337 2.611a2 2 0 0 1-.552.552C20.607 9 19.904 9 18.5 9H16M12 2v2m6-2v2M9 2v3m6-3v3M2 12h2m-2 6h2m-2-3h3M2 9h3"
    />
  </Svg>
);
export default SvgRulerAngular;
