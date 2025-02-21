import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCosmetic = (props: SvgProps) => (
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
      d="M16.5 16a5.5 5.5 0 1 1 3.858-1.58"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.5 20v-4m0 4h3m-3 0h-3"
    />
    <Path
      fill="#000"
      d="M2 11v-.75a.75.75 0 0 0-.75.75zm6 0h.75a.75.75 0 0 0-.75-.75zm.75 6a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zM2 11.75h6v-1.5H2zM2.75 17v-6h-1.5v6zM5 19.25A2.25 2.25 0 0 1 2.75 17h-1.5A3.75 3.75 0 0 0 5 20.75zM7.25 17A2.25 2.25 0 0 1 5 19.25v1.5A3.75 3.75 0 0 0 8.75 17zm0-6v2h1.5v-2z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M3 11h4V5.618a1 1 0 0 0-1.447-.894l-2 1A1 1 0 0 0 3 6.618z"
    />
  </Svg>
);
export default SvgCosmetic;
