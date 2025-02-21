import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShieldUp = (props: SvgProps) => (
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
      d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536.721.315 1.082.473 2.101.473 1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3C5.258 4.03 3.755 4.545 3.378 5.082M16.45 10.95l-3.4-2.55a1.75 1.75 0 0 0-2.1 0l-3.4 2.55a.75.75 0 1 0 .9 1.2l3.4-2.55a.25.25 0 0 1 .3 0l3.4 2.55a.75.75 0 1 0 .9-1.2m-2 2.5-2-1.5a.75.75 0 0 0-.9 0l-2 1.5a.75.75 0 1 0 .9 1.2L12 13.488l1.55 1.162a.75.75 0 1 0 .9-1.2"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgShieldUp;
