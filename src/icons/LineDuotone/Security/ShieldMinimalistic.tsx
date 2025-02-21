import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShieldMinimalistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 22c-1.02 0-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991v-1.574c0-3.198 0-4.797.378-5.334C3.755 4.545 5.258 4.03 8.265 3l.573-.196C10.405 2.268 11.188 2 12 2"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 22c1.02 0 1.38-.158 2.101-.473 2.66-1.162 6.9-3.898 6.9-9.536v-1.574c0-3.198 0-4.797-.378-5.334-.378-.538-1.881-1.053-4.888-2.082l-.573-.196C13.595 2.268 12.812 2 12 2"
      opacity={0.5}
    />
  </Svg>
);
export default SvgShieldMinimalistic;
