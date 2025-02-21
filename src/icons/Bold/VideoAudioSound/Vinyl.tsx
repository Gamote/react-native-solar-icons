import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVinyl = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M11.631 10.488a1.881 1.881 0 1 1 0 3.762 1.881 1.881 0 0 1 0-3.762"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m2.487-18.716a.75.75 0 0 0-.975.716v5.56a3.381 3.381 0 1 0 1.5 2.81V5.093a8.05 8.05 0 0 1 4.273 4.868.75.75 0 1 0 1.43-.45 9.54 9.54 0 0 0-6.228-6.228"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgVinyl;
