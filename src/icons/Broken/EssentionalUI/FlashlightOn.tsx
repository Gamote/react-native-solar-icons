import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlashlightOn = (props: SvgProps) => (
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
      d="M15 22v-4.343c0-.818 0-1.226.152-1.594.153-.367.442-.656 1.02-1.235l3.242-3.242c.29-.29.434-.434.51-.617.076-.184.076-.389.076-.797V10c0-.943 0-1.414-.293-1.707S18.943 8 18 8h-1M9 22v-4.343c0-.818 0-1.226-.152-1.594-.152-.367-.442-.656-1.02-1.235l-3.242-3.242c-.29-.29-.434-.434-.51-.617C4 10.785 4 10.58 4 10.172V10c0-.943 0-1.414.293-1.707S5.057 8 6 8h7M15 16H9M4.5 11h15M12 5V2M8 5 6 3M16 5l2-2M12 19v2"
    />
  </Svg>
);
export default SvgFlashlightOn;
