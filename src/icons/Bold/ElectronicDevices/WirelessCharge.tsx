import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWirelessCharge = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12.065 18A7.845 7.845 0 0 0 20 10.065c-.036-4.419-3.646-8.03-8.065-8.065A7.846 7.846 0 0 0 4 9.935c.036 4.419 3.646 8.03 8.065 8.065m1.309-11.543c.3.286.311.76.026 1.06L11.75 9.25H14a.75.75 0 0 1 .543 1.267l-2.857 3a.75.75 0 1 1-1.087-1.034l1.65-1.733H10a.75.75 0 0 1-.543-1.267l2.858-3a.75.75 0 0 1 1.06-.026"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M11.117 20.924a1 1 0 0 0 .133.04V22a.75.75 0 0 0 1.5 0v-1.035a1 1 0 0 0 .133-.04 1 1 0 0 0 .54-.542c.077-.184.077-.417.077-.883v-.604a9 9 0 0 1-3-.043v.647c0 .466 0 .7.076.883a1 1 0 0 0 .541.541"
    />
  </Svg>
);
export default SvgWirelessCharge;
