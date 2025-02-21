import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShield = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M3 11.991c0 5.638 4.239 8.375 6.899 9.536.721.315 1.082.473 2.101.473V8l-9 3z"
    />
    <Path
      fill="#000"
      d="M14.101 21.527C16.761 20.365 21 17.63 21 11.991V11l-9-3v14c1.02 0 1.38-.158 2.101-.473M8.838 2.805 8.265 3C5.258 4.03 3.755 4.545 3.378 5.082 3 5.62 3 7.22 3 10.417V11l9-3V2c-.811 0-1.595.268-3.162.805"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="m15.735 3-.573-.195C13.595 2.268 12.812 2 12 2v6l9 3v-.583c0-3.198 0-4.797-.378-5.335-.377-.537-1.88-1.052-4.887-2.081"
    />
  </Svg>
);
export default SvgShield;
