import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWashingMachineMinimalistic = (props: SvgProps) => (
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
      d="M21 14c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M17 14a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16 6h-4M9 6H8M7.234 14.362c.855.428 1.833 1.159 3.49 1.457 2.362.426 2.126-1.648 4.488-1.223.72.13 1.206.35 1.55.585"
    />
  </Svg>
);
export default SvgWashingMachineMinimalistic;
