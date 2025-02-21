import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSiren = (props: SvgProps) => (
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
      d="M20 22v-6c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 8 14.8 8 12 8s-4.2 0-5.27.545a5 5 0 0 0-2.185 2.185c-.188.37-.311.778-.392 1.27M4 22v-6"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15 10.815c1.23 0 2.23.955 2.185 2.185M2 22h12m8 0h-4M12 2v3M21 5l-1.5 1.5M3 5l1.5 1.5"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 19v3" />
  </Svg>
);
export default SvgSiren;
