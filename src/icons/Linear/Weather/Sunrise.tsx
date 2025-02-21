import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSunrise = (props: SvgProps) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 22h8M5 19h14M2 16h20"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6Z"
    />
    <Path
      fill="#000"
      d="m12 10 .53-.53a.75.75 0 0 0-1.06 0zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm-4-1.06a.75.75 0 1 0 1.06 1.06zM12.75 16v-6h-1.5v6zm-1.28-5.47 2 2 1.06-1.06-2-2zm0-1.06-2 2 1.06 1.06 2-2z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 2v1M22 12h-1M3 12H2M19.07 4.93l-.392.392M5.322 5.322l-.393-.393"
    />
  </Svg>
);
export default SvgSunrise;
