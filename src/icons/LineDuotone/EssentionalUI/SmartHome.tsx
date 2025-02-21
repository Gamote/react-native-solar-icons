import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSmartHome = (props: SvgProps) => (
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
      d="M14 22c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.52c0-2.29 0-3.434-.52-4.382-.518-.949-1.467-1.537-3.364-2.715l-2-1.24C14.111 2.621 13.108 1.999 12 1.999s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823c-.317.58-.44 1.234-.489 2.177"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11 22a9 9 0 0 0-9-9"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 22a6 6 0 0 0-6-6M5 22a3 3 0 0 0-3-3"
    />
  </Svg>
);
export default SvgSmartHome;
