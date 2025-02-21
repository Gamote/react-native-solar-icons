import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLightning = (props: SvgProps) => (
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
      d="M17.94 17.636c-.078.769-.251 1.286-.643 1.672C16.594 20 15.463 20 13.2 20h-2.4c-2.263 0-3.394 0-4.097-.692C6 18.615 6 17.5 6 15.273v-2.546c0-2.228 0-3.342.703-4.035C7.406 8 8.537 8 10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v1.182M12 20v2"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12 12-1.5 2h3L12 16"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M11 5h2" />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M15.5 8V5.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C14.107 2 13.404 2 12 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C8.5 3.393 8.5 4.096 8.5 5.5V8"
    />
  </Svg>
);
export default SvgLightning;
