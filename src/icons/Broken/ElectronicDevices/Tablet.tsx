import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTablet = (props: SvgProps) => (
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
      d="M12 4h-2C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828c.943.944 2.348 1.127 4.828 1.163M16 4.01c2.48.036 3.885.22 4.828 1.163C22 6.343 22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-2M15 17H9"
    />
  </Svg>
);
export default SvgTablet;
