import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSmartphone2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M5.172 3.172C4 4.343 4 6.229 4 10v4c0 3.771 0 5.657 1.172 6.828S8.229 22 12 22s5.657 0 6.828-1.172S20 17.771 20 14v-4c0-3.771 0-5.657-1.172-6.828S15.771 2 12 2 6.343 2 5.172 3.172"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM12 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
  </Svg>
);
export default SvgSmartphone2;
